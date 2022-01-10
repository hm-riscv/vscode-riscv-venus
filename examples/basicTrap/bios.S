# /*
# 	Author: martin.orehek@hm.edu
# 	Date: 	22.03.2021
# 	Description:
# 		Simple ASM File showing Trap behaviour
# */

# /*
# 	relevant documentation:
# 	-> https://riscv.org/wp-content/uploads/2019/12/riscv-spec-20191213.pdf (Chapter 25, +++)
# 	-> https://github.com/riscv/riscv-asm-manual/blob/master/riscv-asm.md
# 	-> https://web.mit.edu/gnu/doc/html/as_7.html 
# */

# ecall IDs for Trap Execution (between 0x200 and 0x2FF
.equ PRINT_INT,     0x201
.equ PRINT_STRING,  0x204
.equ PRINT_CHAR,    0x211

.text
# ########################################
# system startup (bios etc.)
_enter: 
	nop # workaround because setting breakpoint on first line is not possible

	# initialize BIOS "stack pointer" (symbol comes from linker script / action)
#	la t0, _bios_sp
	addi t0, sp, -0x100 # workaround
	csrw mscratch, t0 
	#csrrw zero, mscratch, t0

	# initialize stack pointer (symbol comes from linker script / action)
#    la sp, _sp

    # initialize interrupt vector register
    # => trap_handler is the entry point
    # => direct mode (!)
    la t0, trap_handler
    csrw mtvec, t0 # write CSR
	#csrrw zero, mtvec, t0

    # disable all interrupts
    csrw mstatus, zero
	# csrrw zero, mstatus, zero
	# clear all pending interrupt requests (if any)
    csrw mip, zero
	# csrrw zero, mip, zero

    # initialize other basic stuff    
	jal init_bios

    # 3. prepare to start "user mode program" with mret
    #addi x1 x0 2
    #slli x1 x1 28
    la t0, main
	csrw mepc, t0 # write CSR
    # csrrw zero mepc t0

    mret # start user main program


# ########################################
# start user program here main()
main:
	nop
	addi sp, sp, -4
	sw ra, 0(sp)

1:	nop
	nop

    # ecall Aufruf
	li a0, PRINT_STRING
	la a1, helloworld
	ecall

	nop
	j 1b # loop

    # shall never be reached
	lw ra, 0(sp)
	addi sp, sp, 4		
	ret

# ########################################
# trap handler jumped to during interrupt execution
#
# align to 4 bytes => [1:0] ... mtvec.MODE
.align 2
trap_handler:
	nop
	csrrw sp, mscratch, sp # save sp; sp = mscratch (BIOS stack area)

	# TODO:
	# -> many things are missing here!!
	#	 (e.g. has the execution of this code side-effecs on the "interrupted" code path?!)
	
    # get MCAUSE of the current trap (t0)
    csrr t0, mcause # read CSR
	# csrrs t0, mcause, zero

	# Interrupts can be separated from other traps with a single branch 
	# on the sign of the mcause register value. 
	# A shift left can remove the interrupt bit and scale the exception codes to index
	# into a trap vector table.
	slli t1, t0, 2

	# load start of correct interrupt hander table
    bltz t0, 1f # branch less-than-zero

	# => SW Interrupt
	la t2, softwareInterruptTable
	j 2f

1:	# => HW Interrupt
	la t2, hardwareInterruptTable

	# jump to location specified in t2
2:	add t2, t2, t1
	jalr zero, t2, 0

# ########################################
# SW Interrupt Handler Table
#.balign 4, 0
.align 2
softwareInterruptTable:
swirq0:
	j unhandled_trap
swirq1:
	j unhandled_trap
swirq2:
	j unhandled_trap
swirq3:
	j unhandled_trap
swirq4:
	j unhandled_trap
swirq5:
	j unhandled_trap
swirq6:
	j unhandled_trap
swirq7:
	j unhandled_trap
swirq8:
	j env_call
swirq9:
	j env_call
swirq10:
	j unhandled_trap
swirq11:
	j env_call
swirq12:
	j unhandled_trap
swirq13:
	j unhandled_trap
swirq14:
	j unhandled_trap
swirq15:
	j unhandled_trap

# ########################################
# /* environment call (ecall) */
#errMsgEcall: .string "catched unsuported ecall function!!!\n"
#.balign 4
.align 2
# env_call:
	# check for a0 => what is being called
	# a1 ... contains additional parameters (!)
env_call:
	csrr t0, mepc
	# csrrs t0, mepc, zero
    addi t0, t0, 4
	csrw mepc, t0
	# csrrw zero, mepc, t0

    addi t0, zero, PRINT_STRING
    beq a0, t0, printString

    addi t0, zero, PRINT_CHAR
    beq a0, t0, printChar

# Unuspported ecall
    la a0, errMsgEcall
    jal puts

1:	# endless loop !!!
    j 1b

# /* ecall: PRINT_CHAR */
printChar:
	mv a0, a1
	jal	putc
	j end_trap_handler

# /* ecall: PRINT_STRING */
printString:
	mv a0, a1
	jal	puts
	j end_trap_handler

# ########################################
# Hardware Interrupt Handler Table
#errMsgHwTrap: .string "catched unsuported interrupt cause\n"
#.balign 4, 0
.align 2
hardwareInterruptTable:
hwirq0: #// User software interrupt
	j unhandled_trap
hwirq1: #// Supervisor software interrupt
	j unhandled_trap
hwirq2: #// Reserved
	j unhandled_trap
hwirq3: #// Machine software interrupt
	j unhandled_trap
hwirq4: #// User timer interrupt
	j unhandled_trap
hwirq5: #// Supervisor timer interrupt
	j unhandled_trap
hwirq6: #// Reserved
	j unhandled_trap
hwirq7: #// Machine timer interrupt
	j unhandled_trap
hwirq8: #// User external interrupt
	j unhandled_trap
hwirq9: #// Supervisor external interrupt
	j unhandled_trap
hwirq10: #// Reserved
	j unhandled_trap
hwirq11: #// Machine external interrupt
	j unhandled_trap
hwirq12: #// Reserved
	j unhandled_trap
hwirq13: #// Reserved
	j unhandled_trap
hwirq14: #// Reserved
	j unhandled_trap
hwirq15: #// Reserved
	j unhandled_trap

# ########################################
# /* unhandled trap */
#.balign 4
.align 2
unhandled_trap:
	csrr t0, mcause
	csrr t1, mepc
	csrr t2, mtval
	# csrrs t0, mcause, zero
	# csrrs t1, mepc, zero
	# csrrs t2, mtval, zero
	j unhandled_trap

# ########################################
# End or Ignored
end_trap_handler:
	csrrw sp, mscratch, sp # mscratch = current sp (BIOS stack area); restore sp to user_code stack;
    mret

# ########################################
# /* helper functions */
# ########################################

# initialize basic I/O system
init_bios:
	addi sp, sp, -4
	sw ra, 0(sp)

	# init UART0
#	jal init_uart0	

	lw ra, 0(sp)
	addi sp, sp, 4	
	ret

# output char on Console
putc:
	addi sp, sp, -4
	sw ra, 0(sp)

#	jal putc_uart0

	lw ra, 0(sp)
	addi sp, sp, 4		
	ret

# output string on Console
puts:
	addi sp, sp, -4
	sw ra, 0(sp)

#	jal puts_uart0

	lw ra, 0(sp)
	addi sp, sp, 4		
	ret

# ########################################
# start data section
.data
errMsgEcall: .string "catched unsuported ecall function!!!\n"
errMsgHwTrap: .string "catched unsuported interrupt cause\n"
#
helloworld: .string "Hello World!!\n"
# end of bios.S

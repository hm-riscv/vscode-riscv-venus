# /*
# 	Author: martin.orehek@hm.edu
# 	Date: 	29.01.2022
# 	Description:
# 		Simple ASM File showing Memory Mapped IO
# */

# UART Base Register Map
.equ UART0_BASE,			0x10013000
# UART Register Map
.equ UART_TXDATA_OFFSET,	0x0
.equ UART_TXCTRL_OFFSET,	0x8

.text
# ########################################
# porgramm start
main:
	nop

1:	nop

	la a0, helloworld_UART
	jal puts

	nop
	j 1b # loop

    nop # should never be reached

# ########################################
# Memory Mapped IO functions
#


# output string on Console
puts:
	addi sp, sp, -4
	sw ra, 0(sp)

	jal puts_uart0

	lw ra, 0(sp)
	addi sp, sp, 4		
	ret

# output char on UART0
# char expected in: a0[7..0]
putc_uart0:
	addi sp, sp, -4
	sw ra, 0(sp)

	# get base address of UART0
	la t0, UART0_BASE

	# send over UART (write word because 'renode' needs word access!)
	sw a0, UART_TXDATA_OFFSET(t0)

    lw ra, 0(sp)
	addi sp, sp, 4
	ret

# output string on UART0
# string start is expected in: a0
puts_uart0:
	addi sp, sp, -4
	sw ra, 0(sp)

	# get base address of UART0
	la t0, UART0_BASE

	mv t1, a0
1:
	lbu t2, 0(t1)
	beq t2, zero, 2f
	sw t2, UART_TXDATA_OFFSET(t0)
	addi t1, t1, 1
	j 1b

2: 	lw ra, 0(sp)
	addi sp, sp, 4
	ret

# ########################################
# start data section
.data
#
helloworld: .string "Hello World!!\n"
helloworld_UART: .string "Hello World thourgh UART!!\n"
# end of file

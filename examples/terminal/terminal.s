jal pollInt
addi a0, x0, 10 # exit
ecall

pollInt:
addi a0, x0, 0x130 # 0x130 equals parseInt
addi a5, x0, 0 # we use a5 as our comparison for branching
addi a1, x0, 0 # we also need to set a1
ecall
beq a1, a5, pollInt # if no input was detected both are 0 and we need to keep polling
addi a0, x0, 1 # If we have input we echo it in the console
ecall   # If we have input we echo it in the console
jr ra   # return
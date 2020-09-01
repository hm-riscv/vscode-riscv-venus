li a0, 0x120
li a1, 0b0110011001011011
li a2, 0b1111111111111111
ecall
loop:
li a0, 0x122
ecall
mv a1, a0
li a0, 0x121
ecall
j loop

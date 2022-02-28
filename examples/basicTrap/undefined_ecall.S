# test behaviour with unspecified ecall, e.g. 0
#

li a0, 1 # print_int
li a1, 42
ecall
nop


# li a0, 10 # exit
# ecall
# nop

# li a0, 17 # exit with code
# li a1, 42
# ecall
# nop

li a0, 0 # unknown!
ecall
nop

li a0, 1 # print_int
li a1, 43
ecall
nop
.data
hello: .string "Hello World!\n"
nl: .string "\n"

.text
main: nop
    li a0, 4
    la a1,hello
    ecall

    li s0,0
    # loop
1:  li a0,1     # print_int
    mv a1,s0
    ecall

    li a0,11    # print_char    
    li a1,','
    ecall

    addi s0,s0,1

    j 1b

    # exit
    li a0,10
    ecall




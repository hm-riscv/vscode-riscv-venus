addi x31, x0, 4
addi x30, x0, 2

addi x2, x0, 1600
jal x1, rec_func
beq x0, x0, end

rec_func:
    addi x2, x2, -8
    sd x1, 0(x2)
    bge x5, x31, true
    ld x1, 0(x2)
    addi x10, x0, 1
    addi x2, x2, 8
    jalr x0, x1, 0
true:
    addi x5, x5, -2
    jal x1, rec_func
    ld x1, 0(x2)
    addi x2, x2, 8
    mul x10, x10, x30
    addi x10, x10, 1
    jalr x0, x0, 0

end:
# /*
# 	Author: martin.orehek@hm.edu
# 	Date: 	10.01.2021
# 	Description:
# 		Test CSR Instructions 
# */

.text
# ########################################
# 

nop
csrr x1, mtvec
nop
csrw mtvec, x1
nop
csrs mtvec, x1
nop
csrc mtvec, x1
nop
#csrwi csr, imm --> csrrwi x0, csr, imm
csrrwi x0, mtvec, 1
csrwi mtvec, 0b11111
nop
csrsi mtvec, 0b10000
nop
csrci mtvec,1
nop


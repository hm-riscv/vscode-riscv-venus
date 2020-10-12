# Ecalls

To use an environmental call, load the ID into register `a0`, and load any arguments into `a1` - `a7`. Any return values will be stored in argument registers.

The following environmental calls are currently supported.

| ID (`a0`)  | Name            | Description                                                         |
| ---------- | --------------- | ------------------------------------------------------------------- |
| 1          | print_int       | prints integer in `a1`                                              |
| 4          | print_string    | prints the null-terminated string whose address is in `a1`          |
| 9          | sbrk            | allocates `a1` bytes on the heap, returns pointer to start in `a0`  |
| 10         | exit            | ends the program                                                    |
| 11         | print_character | prints ASCII character in `a1`                                      |
| 17         | exit2           | ends the program with return code in `a1`                           |
| 34         | printHex        | prints hex in `a1`                                                  |
| 256 / 0x100 | set_led_matrix | prints a led in the Led-Matrix view. The upper 2 bytes in `a1` specify the x Position, the lower 2 bytes y position (Currently the matrix is only 10x10 big). The color is specified as rgb in the lower 3 bytes of `a2`. The red channel is the highest byte and blue the lowest byte. Example see below	|
| 272 / 0x110	| draw_robot	| draws a row of leds in the robot led matrix. `a1` states the index of the row, starting from the bottom. The lower 16 bits in `a2` are the mask of which leds to draw                                               |
| 304 / 0x130	| poll_integer	| polls the VenusTerminal for an integer value. If a valid integer input was detected the value is saved in `a1`. Else this does nothing or print a warning on invalid input. Every input before calling this once is ignored! |


As an example, the following code prints the integer `42` to the console:

    addi a0 x0 1        # print_int ecall
    addi a1 x0 42       # integer 42
    ecall

### Led Matrix
```assembly
addi  a0, x0, 0x100     # Set ecall
li  a1, 0x00030001      # x == 4, y == 2
# Print red and green == yellow. rgb(255,255,0)
li  a2, 0x00FFFF00
ecall
```

### Robot
This example print 4 lines

	li a0, 0x110 				# Set ecall
	li a1, 0					# row 0
	li a2, 0x0					# print nothing
	ecall
	li a1, 1					# row 1
	ecall
	li a1, 2					# row 2
	li a2, 0x0ff0				# print 4 leds off, 8 on, 4 off
	ecall
	li a1, 3					# row 3
	li a2, 0x1ff8				# 3, 10, 3
	ecall
	li a1, 4
	li a2, 0b0001111111111000   # Bit mask as binary is often easier. This is the same mask as row 3


### Poll Integer
	jal pollInt 				# Jump to our polling routine
	addi a0, x0, 10 			# exit
	ecall

	pollInt:
	addi a0, x0, 0x130 			# 0x130 equals poll_integer
	addi a5, x0, 0 				# we use a5 as our comparison for branching
	addi a1, x0, 0 				# we also need to reset a1
	ecall						# poll_integer
	beq a1, a5, pollInt 		# if no input was detected both are 0 and we need to keep polling
	addi a0, x0, 1 				# If we have input we echo it in the console
	ecall   					# If we have input we echo it in the console
	jr ra   					# return

# Assembler Directives

The following assembler directives are supported:

| Directive | Effect |
| --------- | ------ |
| `.data`   | Store subsequent items in the [[static segment\|Memory Segments]] at the next available address. |
| `.text`   | Store subsequent instructions in the [[text segment\|Memory Segments]] at the next available address. |
| `.byte`   | Store listed values as 8-bit bytes. |
| `.asciiz` | Store subsequent string in the data segment and add null-terminator. |
| `.word`   | Store listed values as unaligned 32-bit words. |
| `.globl`  | Makes the given label global. |
| `.float`  | Reserved. |
| `.double` | Reserved. |
| `.align`  | Reserved. |
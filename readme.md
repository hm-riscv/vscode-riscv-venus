# RISC-V Venus Simulator embedded in VS Code

This Visual Studio Code extension embeds the popular
[Venus RISC-V simulator](https://venus.cs61c.org/). It provides a standalone
learning environment as no other tools are needed. It runs RISC-V assembly code
with the standard debugging capabilities of VS Code.

To use it as educational tool, further views

## Installation

You can easily install the extension via the marketplace by searching for
"riscv":

![Installation](docs/install.gif "Installation")

Alternatively, you can install it via VS Code Quick Open (`CTRL+P`):

    ext install hm.riscv-venus

## Getting Started

You can debug any assembler file you are editing. We recommend using the [RISC-V
Support](https://marketplace.visualstudio.com/items?itemName=zhwu95.riscv)
extension for syntax highlighting.

Just start debugging with "Run and Debug" to debug the current file:

![Quick Start](docs/quickstart.gif "Quick Start")

You can step through the code and pseudo-operations are expanded automatically.
The actually executed instructions are displayed in an assembly view.
Breakpoints are of course also supported.

The basic [Venus environmental
calls](https://github.com/ThaumicMekanism/venus/wiki/Environmental-Calls) are
also supported. Further environment calls are also supported for educational toy
examples are described in the following.

## LED Matrix

The LED matrix is a 10x10 RGB LED matrix. Each LED is set individually by the
environment call `0x100`.

![LED Matrix](docs/ledmatrix.gif "LED Matrix")

### Ecall `0x100`: Set Pixel

This sets the pixel at position `(x,y)` to an RGB color `(r,g,b)`:

- `a1` contains `x` in bits 31-16 and `y` in bits 15-0`
- `a2` contains `r` in bits 23-16, `g` in bits 15-8 and `b` in bits 7-0

For example to set a red pixel at position (2,4):

    li a0, 0x100
    li a1, 0x00020004
    li a2, 0x00FF0000
    ecall

### Using the LED matrix view

You can open the board view by pressing `CTRL+P` and then select/enter "Venus:
Open LED Matrix".

Alternatively, you can have it open automatically by adding
[`.vscode/launch.json`](https://github.com/hm-riscv/vscode-riscv-venus/blob/master/examples/ledmatrix/.vscode/launch.json) in your project:

    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "venus",
                "request": "launch",
                "name": "Debug current file",
                "program": "${file}",
                "stopOnEntry": true,
                "openViews": [ "LED Matrix" ]
            }
        ]
    }

You find an example that draws the RISC-V logo
[here](https://github.com/hm-riscv/vscode-riscv-venus/tree/master/examples/ledmatrix).

## Toy Robot LED Matrix

The toy robot example is a variation of the LED matrix, but with a different
style and way of setting the LEDs: The LEDs are all green and are set by a
single bitmask per row. It has 12 rows of each 16 LEDs.

![Toy Robot](docs/robot.gif "Toy Robot")

### Ecall `0x110`: Set LED row

Update a single row:

- `a1` sets the row, where 0 is the bottom row
- `a2` contains the LEDs on/off (1/0) status in bits 15-0 where bit 15 is the
   leftmost LED

### Using the LED matrix view

You can open the board view by pressing `CTRL+P` and then select/enter "Venus:
Open LED Matrix".

Alternatively, you can have it open automatically by adding
[`.vscode/launch.json`](https://github.com/hm-riscv/vscode-riscv-venus/blob/master/examples/robot/.vscode/launch.json) in your project:

    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "venus",
                "request": "launch",
                "name": "Debug current file",
                "program": "${file}",
                "stopOnEntry": true,
                "openViews": [ "Robot" ]
            }
        ]
    }

You find an example that draws the RISC-V logo
[here](https://github.com/hm-riscv/vscode-riscv-venus/tree/master/examples/robot).

## Seven Segment Board

The seven segment is a more complex example. It has two push buttons as input
devices and two LEDs and seven segment displays as output.

![Seven Segment Board](docs/sevensegboard.gif "Seven Segment Board")

### Ecall `0x120`: Set seven segment display

This ecall updates the seven segment display. The segments can be driven
individually. The environment call expects the values and a mask of valid
updates in two registers.

The segments are mapped to the bits in the two registers (value and mask) as
follows:

![Seven Segment Mapping](docs/sevensegmapping.png "Seven Segment Mapping")

Register `a1` contains the values and register `a2` contains the mask of the
updates.

The following code will show "42" in the segments:

    li a0, 0x120
    li a1, 0b0110011001011011
    li a2, 0b1111111111111111
    ecall

Update only two segments:

    li a0, 0x120
    li a1, 0b0000000000000100
    li a2, 0b0000000000010100
    ecall

What will the segments display now?

### Ecall `0x121`: Set LEDs

This environment call sets the LEDs as defined in the two lowest bits of `a1`.
Bit 0 sets LED 0 (green) and bit 1 sets LED 1 (red). The LEDs are on when the
bit is 1 and off when the bit is 0. The LEDs preserve their state until they are
changed by calling this ecall again.

The following code lets the LEDs blink alternating:

    loop:
    li a0, 0x121
    li a1, 0b01
    ecall
    li a0, 0x121
    li a1, 0b10
    ecall
    j loop

### Ecall `0x122`: Read push buttons

This reads whether the push buttons have been pressed. Once the push buttons are
pressed they will visually be highlighted as the environment will buffer this
press. The ecall whether the two buttons were pressed in the lowest two bits of
`a0` and resets the buffers.

The following code reads whether buttons have been pressed and set the LEDs
accordingly.

    loop:
    li a0, 0x122
    ecall
    mv a1, a0
    li a0, 0x121
    ecall
    j loop

### Using the board view

You can open the board view by pressing `CTRL+P` and then select/enter "Venus:
Open Seven Segment Board UI".

Alternatively, you can have it open automatically by adding
[`.vscode/launch.json`](https://github.com/hm-riscv/vscode-riscv-venus/blob/master/examples/sevensegboard/.vscode/launch.json) in your project:

    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "venus",
                "request": "launch",
                "name": "Debug current file",
                "program": "${file}",
                "stopOnEntry": true,
                "openViews": [ "Seven Segment Board" ]
            }
        ]
    }

You can find an example [here](https://github.com/hm-riscv/vscode-riscv-venus/blob/master/examples/sevensegboard/).

### Example assignment

Implement a counter with the seven segment board. Count up when button 1 is
pressed and count down when button 0 is pressed. Display the current counter
value in the seven segment display. Let the red LED blink when the counter
overflows.

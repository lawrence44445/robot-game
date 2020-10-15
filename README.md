This is the robot game, where the robot can be placed anywhere in a 5 x 5 grid. The robot will skip commands that are invalid and run only valid commands. First command will be the first PLACE command that is valid, otherwise the robot will not move. The robot location is indicated by the yellow square. Every second the robot will follow a command. REPORT command makes the robot stay at the current location for one second more.
Rows and columns are zero indexed, where 0,0 starts in the bottom left.

## Demo

https://codesandbox.io/s/priceless-greider-5oii3

## Valid commands

x = column of the grid
y = row of the grid
direction = [NORTH, SOUTH, EAST, WEST]

1. PLACE x,y,direction
2. MOVE
3. REPORT
4. LEFT
5. RIGHT

### `Test Cases'

MOVE<br>
MOVE<br>
MOVE

Result: Game does not run

PLACE 1,1,WEST<br>
PLACE 2,2,EAST<br>
PLACE 5,5,NORTH<br>
PLACE 59,59,NORTH<br>
MOVE<br>
MOVE

Result: column 4, row 2, East direction


PLACE 5,10,EAST<br>
MOVE<br>
MOVE<br>
PLACE 2,2,EAST

Result: column 2, row 2, EAST

PLACE 1,2,EAST<br>
MOVE<br>
MOVE<br>
MOVE<br>
MOVE<br>
MOVE<br>
MOVE<br>
LEFT<br>
LEFT<br>
MOVE<br>
MOVE<br>
MOVE

Result: column 1, row 2, WEST

PLACE 1,1,NORTH<br>
LEFT<br>
LEFT<br>
MOVE<br>
RIGHT<br>
MOVE

Result: column 0, row 0, WEST
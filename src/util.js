const dirs = {
    NORTH: [0, 1],
    SOUTH: [0, -1],
    WEST: [-1, 0],
    EAST: [1, 0]
  };
  
  export const isValid = (x, y) => {
      const xVal = Number(x);
      const yVal = Number(y);
      return xVal >= 0 && xVal <= 4 && yVal >= 0 && yVal <= 4 && !isNaN(xVal) && !isNaN(yVal);
  };
  
  const getDirection = (currDir, cmd) => {
    const map = {
      NORTH: 0,
      SOUTH: 180,
      WEST: 270,
      EAST: 90,
      0: "NORTH",
      90: "EAST",
      180: "SOUTH",
      270: "WEST"
    };
    const curr = map[currDir];
    const addValue = cmd === "LEFT" ? 270 : 90; // adding 270 should be the same as subtracting 90
    const res = curr + addValue;
    return map[res % 360];
  };
  
  export const findFirstMove = (moves) => {
    for (let i = 0; i < moves.length; i++) {
      const curr = moves[i];
      if (curr.indexOf("PLACE") >= 0) {
        const locs = curr.split(" ")[1];
        const locsSplit = locs.split(",");
        if (locsSplit[0] >= 0 && locsSplit[1] <= 4) {
          return {
            idx: i,
            posX: Number(locsSplit[0]),
            posY: Number(locsSplit[1]),
            dir: locsSplit[2]
          };
        }
      }
    }
    return -1;
  };
  
  export const getNextMove = (move, robot) => {
    const moveSplit = move.split(" ");
    switch (moveSplit[0]) {
      case "PLACE":
        const endSplit = moveSplit[1].split(",");
        if (endSplit.length !== 3 || !dirs[endSplit[2]]) {
            return robot;
        }
        return {
          x: Number(endSplit[0]),
          y: Number(endSplit[1]),
          dir: endSplit[2],
        };
      case "MOVE":
        const move = dirs[robot.dir];
        return {
          x: Number(robot.x) + move[0],
          y: Number(robot.y) + move[1],
          dir: robot.dir
        };
      case "LEFT":
        return {
          ...robot,
          dir: getDirection(robot.dir, "LEFT")
        };
      case "RIGHT":
        return {
          ...robot,
          dir: getDirection(robot.dir, "RIGHT")
        };
      default:
        return robot;
    }
  };
  
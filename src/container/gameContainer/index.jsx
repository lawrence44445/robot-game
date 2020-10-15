import React from "react";
import { findFirstMove, isValid, getNextMove } from "../../util";
import Grid from "../../components/grid";
import "./style.css";

export default class GameContainer extends React.Component {
  state = {
    location: { x: 0, y: 0, dir: "NORTH" },
    commands: [],
    commandString: "",
    running: false
  };
  index = 0;
  gameRunner = 0;

  onChange = (e) => {
      const { running } = this.state;
      if (running) return; 
      this.setState({ commandString: e.target.value });
  }

  onClick = () => {
    const { commandString, running } = this.state;
    if (running) return;
    const newCommands = commandString.split("\n");
    const validFirstMove = findFirstMove(newCommands);
    if (validFirstMove < 0) return;
    this.setState(
      { commands: newCommands, running: true },
      () => {
        this.gameRunner = setInterval(this.runGame, 1000);
      }
    );
  };

  runGame = () => {
    const { commands, location } = this.state;
    if (this.index >= commands.length || commands[this.index] === undefined) {
      this.setState({ commands: [], running: false, commandString: ''});
      this.index = 0;
      clearInterval(this.gameRunner);
      return;
    }
    const nextPos = getNextMove(commands[this.index], location);
    if (isValid(nextPos.x, nextPos.y)) {
      this.setState({ location: nextPos });
    }
    this.index += 1;
  };

  render() {
    const { commandString, location } = this.state;
    return (
      <div className="game-container">
        <Grid location={location} />
        <div className="game-command-control">
          <textarea className="game-command-input" onChange={this.onChange} value={commandString} />
          <button className="game-command-button" onClick={this.onClick}>Run</button>
        </div>
      </div>
    );
  }
}

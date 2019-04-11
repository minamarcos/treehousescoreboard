import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.js";
import Player from "./Player.js";
import AddPlayerForm from "./AddPlayerForm.js";

import Footer from "./Footer.js";

class App extends React.Component {
  state = {
    players: [
      {
        name: "mina",
        score: 1,
        id: 1
      },
      {
        name: "mary",
        score: 0,
        id: 2
      },
      {
        name: "sophia",
        score: 0,
        id: 3
      },
      {
        name: "tina",
        score: 0,
        id: 4
      }
    ]
  };

  // player  id counter
  prevPlayerID = 4;
  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };
  //Arrayindex
  handelScoreChange = (index, delta) => {
    console.log(index, delta);
    this.setState(prevState => {
      return {
        score: (prevState.players[index].score += delta)
      };
    });
  };

  removePlayer = id => {
    this.setState(prevState => {
      //filtering array
      //using prev state value
      // removing row from array
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };
  handleAddPlayer = name => {
    this.setState({
      players: [
        //Destructuring Props
        ...this.state.players,
        {
          name, // name:name ES2015
          score: 0,
          id: (this.prevPlayerID += 1)
        }
      ]
    });
  };
  render() {
    const highScore = this.getHighScore();
    // using .map to list
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {this.state.players.map((player, index) => (
          <Player
            playerName={player.name}
            score={player.score}
            key={player.id.toString()}
            id={player.id}
            index={index}
            isHighScore={highScore === player.score} // is a player's 'score' prop equal to the high score?
            changeScore={this.handelScoreChange}
            removePlayer={this.removePlayer}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
        <Footer Year="2019" copy="Footer Copy" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

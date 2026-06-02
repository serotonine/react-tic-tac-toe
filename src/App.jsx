// Hooks.
import { useState, useEffect } from "react";
// Data.
import { WINNING_COMBINATIONS } from "./data/winning-combinations";
import { PLAYERS } from "./data/config";
// Components.
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";

function App() {
  // Player.
  const [isActive, setIsActive] = useState(true);
  // Update players names changed in the  Player component.
  const [playerNames, setPlayerNames] = useState(PLAYERS);
  const players = Object.entries(PLAYERS);
  // Game score.
  const [gameScore, setGameScore] = useState([]);
  // Full Board.
  const fullBoard = gameScore.length === 9;
  // Reset.
  const [reset, setReset] = useState(false)
  // Log.
  const [score, setScore]= useState({x:0, o:0, none:0});
  // Winner
  const [winner, setWinner] = useState(null);


  // Player.
  function getCurrentPlayer(gameScore) {
    if (gameScore.length > 0) {
      return gameScore.at(0).player === "X" ? "O" : "X";
    }
    const [symbol] = players.at(0);
    return symbol;
  }
 
  // GameBoard.
  function onClickGrid(rowIndex, colIndex) {
    // If replay.
    if(reset){
      setReset(false);
    }

    const currentPlayer = getCurrentPlayer(gameScore);
    // push in array.
    setGameScore((prevGameScore) => [
      { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevGameScore,
    ]);
    // Switch Active.
    setIsActive((prev)=>!prev);

    return currentPlayer;
  }
  function isWinner() {
    // Set players.
    const symbols = ["X", "O"];
    for (const symbol of symbols) {
      // Get all squares for the current player.
      const playerSquares = gameScore
        .filter((item) => item.player === symbol)
        .map((item) => ({
          row: Number(item.square.row),
          col: Number(item.square.col),
        }));
        
      // Stop if playerSquares is too short.
      if (playerSquares.length < 3) {
        continue;
      }
      // Check each winning combination.
      for (const combinations of WINNING_COMBINATIONS) {
        const isWinning = combinations.every((combination) =>
          playerSquares.some(
            (square) =>
              square.row === combination.row &&
              square.col === combination.column
          )
        );
        if (isWinning) {
           setScore((prevScore) => ({
            ...prevScore,
             [symbol.toLowerCase()]: prevScore[symbol.toLowerCase()] + 1,
          }));
          setWinner((prev) => prev = playerNames[symbol]);
          return;
        }
      }
    }
    setWinner(null);
  }
  useEffect(() => {
    isWinner();
  }, [gameScore]);

  // Replay.
  function handleReplay(){
    setReset((prev) => prev = true);
    setGameScore([]);
  }
  // Update player name.
  function handlePlayerNameChg(symbol, name) {
    setPlayerNames((prevNames) => ({
      ...prevNames,
      [symbol]: name
    }));
  }
  

  return (
    <>
      <main id="game-container">
        <header className="players flex flex-center">
          {players.map(([symbol, name], index) => {
            return (
              <Player
                key={"p" + index}
                symbol={symbol}
                name={name}
                isActive={index === 0 ? isActive : !isActive}
                onChgName = {handlePlayerNameChg}
              ></Player>
            );
          })}
        </header>
        <section>
          <GameBoard getSelectedCell={onClickGrid} isReset={reset}/>
          {(winner || fullBoard) && (
            <GameOver winner={winner} replay={handleReplay} />
          )}
        </section>
      </main>
      <footer className="log">
        <Log score={score} names={playerNames}></Log>
      </footer>
    </>
  );
}

export default App;

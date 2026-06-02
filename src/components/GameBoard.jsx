import { INIT_GAME_BOARD } from "../data/config";
import { useState, useEffect  } from "react";

export default function GameBoard({ getSelectedCell, isReset}) {
  // Init with a deep copy of INIT_GAME_BOARD.
  const [gameBoard, setGameBoard] = useState([
    ...INIT_GAME_BOARD.map((row) => [...row])]);
// Reset gameBoard when isReset changes.
  useEffect(() => {
    if (isReset) {
      setGameBoard(INIT_GAME_BOARD.map((row) => [...row]));
    }
  }, [isReset]); // Only re-run the effect if isReset changes.


  function onClickHandler(e) {
    const [rowIndex, colIndex] = e.target.dataset.key.split("-");
    
    const currentGameBoard = gameBoard.map((row, rowId) =>
      rowId === Number(rowIndex)
        ? row.map((col, colId) =>
            colId === Number(colIndex)
              ? getSelectedCell(rowIndex, colIndex)
              : col
          )
        : row
    );
    setGameBoard(currentGameBoard);
  }
  

  return (
    <div className="game-board">
      { gameBoard.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <button
            type="button"
            key={rowIndex + "-" + colIndex}
            data-key={rowIndex + "-" + colIndex}
            onClick={onClickHandler}
            disabled={col !== null}
          >
            {col}
          </button>
        ))
      )}
    </div>
  );
}

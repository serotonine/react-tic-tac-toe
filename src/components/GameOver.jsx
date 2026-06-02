export default function GameOver({ winner, replay}) {
  return (
    <div className="game-over">
      <h2>Game Over!</h2>
      <h3>{winner ? `The winner is ${winner}` : "No winner"}</h3>
      <button type="button" onClick={replay}>REPLAY</button>
    </div>
  );
}

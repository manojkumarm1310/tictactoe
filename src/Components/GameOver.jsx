export default function GameOver({winner,restart})
{
    return(<div id="game-over">
    <h2>Game Over!</h2>
    {winner&& <p>  {winner} Won</p>}
    {!winner && <p>Match Draw</p>}
    <p><button onClick={restart}>rematch</button></p>
</div>)
}

export default function GameBoard({onSelect,gameboard})
{   
    return(<ol id="game-board">
        {gameboard.map((row,indexrow)=><li key={indexrow}>
            <ol>
                {row.map((playerSymbol, indexcol)=>(<li key={indexcol}><button onClick={()=>onSelect(indexrow,indexcol)} disabled={playerSymbol!==null}>{playerSymbol}</button></li>))}
            </ol>
        </li>)}
    </ol>)
}

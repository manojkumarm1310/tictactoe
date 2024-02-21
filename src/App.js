import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log"
import { WINNING_COMBINATIONS } from "./Components/winning-combinations"
import GameOver from "./Components/GameOver"

const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function deriveActive(gameTurns)
{
  let currentPlayer="X";
  if(gameTurns.length >0 && gameTurns[0].player==="X")
  {
    currentPlayer="O";
  }
  return currentPlayer;
}
function App() {
  const [gameTurns,setGameTurns]=useState([]); 
  const ActivePlayer=deriveActive(gameTurns);
  let gameboard=[...initialGameBoard].map(array=>[...array]);
    
  for(const turn of gameTurns)
  {
      const {square,player}=turn;
      const {row,col}=square;

      gameboard[row][col]=player;
  }


  let winner=undefined;
  for(const combinations of WINNING_COMBINATIONS)
  {
    const firstSquareSymbol=gameboard[combinations[0].row][combinations[0].column]
    const secSquareSysmbol=gameboard[combinations[1].row][combinations[1].column]
    const thirdSquareSymbol=gameboard[combinations[2].row][combinations[2].column]

  
    if(firstSquareSymbol && firstSquareSymbol===secSquareSysmbol && firstSquareSymbol===thirdSquareSymbol )
    {
      winner=firstSquareSymbol;
    }
  }

  const hasDraw=gameTurns.length===9 && !winner;
  function handleSelect(rowIndex,colIndex)
  {
      setGameTurns((prevTurn)=> {
      const currentPlayer=deriveActive(prevTurn);
      const updatedTurns=[{square:{row:rowIndex,col:colIndex},player:currentPlayer },...prevTurn] 
      return updatedTurns;
    });
  }

  function handleRestart()
  {
    setGameTurns([]);
  }

  return (
  <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
          <Player iniName="player 1" symbol="X" isActive={ActivePlayer==="X"}/>
          <Player iniName="player 2" symbol="O" isActive={ActivePlayer==="O"}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} restart={handleRestart} />}
      <GameBoard  onSelect={handleSelect}  gameboard={gameboard} />
    </div>
    <Log turns={gameTurns}/>
  </main>

  )
}

export default App
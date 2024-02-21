import React, { useState } from "react"
export default function Player({iniName,symbol,isActive})
{
    const [playerName,setPlayerName]=useState(iniName);
    const [isEditing,setIsEditing]=useState(false);
    function handleEditClick()
    {
        setIsEditing((Editing)=>!Editing)
    }
    function handleInput(event)
    {
        setPlayerName(event.target.value);
    }
    let EditplayerName=<span className="player-name">{playerName}</span>;
    if(isEditing)
    {
        EditplayerName=<input type="text" value={playerName} required onChange={handleInput}/>
    }
    return(
    <li className={isActive ? "active":undefined}>
        <span className="player">
          {EditplayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" :"Edit"}</button>
      </li>)
}

import { useState } from "react";

export default function Player({name, symbol}){

  const [isEditing, setIsEditing] = useState(false)
  
  function handleEdit (){
    setIsEditing(true);
  }

  function handleSave (){
    setIsEditing(false);
  }

  return(
  	<li>
						<span className="player">
              {isEditing ? <input type="text" required /> : <span className="player-name">{name}</span> }
						
						<span className="player-symobol"> {symbol}</span>
						</span>
						{isEditing ? <button onClick={handleSave}>Save</button> : <button onClick={handleEdit}>Edit</button>}
					</li>
          
    );
};
import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onSave }) {
	const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName)

	

  function handleChange(e){
    setName(e.target.value);
  }

	let playerName = <span className="player-name">{name}</span>;

	if (isEditing) {
    //two-way binding
		playerName=<input type="text" required value={name} onChange={handleChange}/>;
	}

	function handleEdit() {
		setIsEditing((editing) => !editing);

		if(isEditing){
			onSave(symbol, name);
		}
	}

	return (
		<li className={isActive? 'active' : undefined}>
			<span className="player">
				{playerName}

				<span className="player-symobol"> {symbol}</span>
			</span>

			<button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}

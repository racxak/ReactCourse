import { useState } from "react";

export default function Player({ initialName, symbol }) {
	const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName)

	function handleEdit() {
		setIsEditing((editing) => !editing);
	}

  function handleChange(e){
    setName(e.target.value);
  }

	let playerName = <span className="player-name">{name}</span>;

	if (isEditing) {
		playerName=<input type="text" required value={name} onChange={handleChange}/>;
	}

	return (
		<li>
			<span className="player">
				{playerName}

				<span className="player-symobol"> {symbol}</span>
			</span>

			<button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}

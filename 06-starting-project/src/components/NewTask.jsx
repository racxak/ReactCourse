import { useState } from "react";

export default function NewTask({ handleAddTask }) {
	const [enteredTask, setEnteredTasks] = useState("");

	function handleChange(e) {
		setEnteredTasks(e.target.value);
	}
	function handleSave() {
		handleAddTask(enteredTask);
		setEnteredTasks("");
	}

	return (
		<div className="flex items-center gap-4">
			<input
				type="text"
				className="w-64 px-2 py-1 rounded-sm bg-stone-200"
				onChange={handleChange}
				value={enteredTask}
			/>
			<button
				onClick={handleSave}
				className="text-stone-700 hover:text-stone-950"
			>
				Add Task
			</button>{" "}
		</div>
	);
}

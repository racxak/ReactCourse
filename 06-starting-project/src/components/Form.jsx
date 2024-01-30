import { useRef } from "react";
import Input from "./Input";
export default function Form({handleSaveProject}) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	function handleSave(){
		const enteredTitle = title.current.value;
		const enteredDes = description.current.value;
		const enteredDueDate = dueDate.current.value;
		handleSaveProject({
			title: enteredTitle,
			description: enteredDes,
			dueDate: enteredDueDate
		})

	}

	return (
		<div className="w-[35rem] mt-16 ">
			<menu className="flex items-center justify-end gap-4 my-4">
				<li>
					<buttonc className="text-stone-800 hover:text-stone-950">
						Cancel
					</buttonc>
				</li>
				<li>
					<button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"	
					onClick={handleSave}>
						Save
					</button>
				</li>
			</menu>

			<div>

					<Input type="text" ref={title} label="Title"></Input>
          <Input ref={description} label="Description" isTextArea></Input>
					<Input type="date" ref={dueDate} label="Due date"></Input>

			</div>
		</div>
	);
}

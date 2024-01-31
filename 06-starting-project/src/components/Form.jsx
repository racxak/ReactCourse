import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function Form({handleSaveProject}) {
	const modal = useRef();
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	function handleSave(){
		const enteredTitle = title.current.value;
		const enteredDes = description.current.value;
		const enteredDueDate = dueDate.current.value;

		if(enteredTitle.trim() === '' || enteredDes.trim() === '' || enteredDueDate.trim() === ''){
			modal.current.open();
			return;
		} 

		handleSaveProject({
			title: enteredTitle,
			description: enteredDes,
			dueDate: enteredDueDate
		})

	}

	return (
		<>
		<Modal  ref={modal} buttonCaption="Save"> 
			<h2 className='my-4 text-stone-700 text-xl font-bold' >Incalid Input</h2>
			<p className='text-stone-600 mb-4'>Opps... looks like you forgot to eneter a value.</p>
			<p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field </p>
		</Modal>
		<div className="w-[35rem] mt-16 ">
			<menu className="flex items-center justify-end gap-4 my-4">
				<li>
					<button className="text-stone-800 hover:text-stone-950">
						Cancel
					</button>
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
		</>
	);
}

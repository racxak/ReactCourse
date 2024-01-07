// Forwarding Refs
// Your task is to finish a custom Input component that was created by a colleague.

// The Input component must be highly configurable and meet the following requirements:

// It must accept a label prop which is used to set the text for the <label> element (i.e., between the <label> tags)

// It must accept all other attributes that could be added to <input> elements and set those props on the <input> element

// It must accept the special ref prop and connect the received ref to the <input> element

// This Input component can then be used in the App component. There, it's actually already being used and some props (the label and type props) are already set on the custom Input component.

// But in addition, your task also is to read the entered name and email values inside of the handleSaveData function with help of React's "ref" feature.

// To achieve this task, you must ensure that the custom Input component is able to receive the special ref prop and that this prop is then "connected" to the returned <input> element.

// Of course you also must add fitting refs to the App component and use them in handleSaveData to retrieve the actual entered input data.

// The read values must then be stored in the already-existing userData object.

// Important: In this Udemy exercise workspace, any React Hooks must be accessed directly on the imported React object (import React from 'react') - for example: React.useState().

import Input from "./Input";
import React from "react";

export const userData = {
	name: "",
	email: "",
};

export function App() {
	const name = React.useRef();
	const email = React.useRef();

	function handleSaveData() {
		userData.name = name.current.value;
		userData.email = email.current.value;

		console.log(userData);
	}

	return (
		<div id="app">
			<Input ref={name} type="text" label="Your Name" />
			<Input ref={email} type="email" label="Your E-Mail" />
			<p id="actions">
				<button onClick={handleSaveData}>Save Data</button>
			</p>
		</div>
	);
}

// -------------------------------------------------------------------------------

import React from "react";

const Input = React.forwardRef(function Input({ label, ...props }, ref) {
	// Todo: Accept forwarded ref and "connect" it to the <input> element
	return (
		<p className="control">
			<label>{label}</label>
			{/* Todo: "Forward" remaining props to <input> element */}
			<input ref={ref} {...props} />
		</p>
	);
});

export default Input;

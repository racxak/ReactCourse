// Exposing Component APIs
// Your working on a part of an application that contains a form which should be resettable from outside that form.

// A colleague prepared a Form component that contains a couple of dummy inputs and a "Save" button that's not doing anything.

// Your task is to expose a clear() function from inside that Form component so that other components that use the Form component can call that function to reset the form.

// Because that exposed clear() function should call the form's built-in reset() method (the JS form object, which is the underlying object of the <form> element, has a reset() method that does exactly what its name implies).

// So the Form component should be usable like this:



// function SomeComponent() {
//   const form = React.useRef();
 
//   function handleClear() {
//     form.current.clear();
//   }
 
//   return <Form ref={form}/>
// }


// After adding this feature to the Form component you should tweak the App component to establish a "connection" to the Form component and call the newly exposed clear() method from inside the App component's handleRestart() function.

// So you should add code similar to the above code snippet to the App component.

import Form from './Form';
import React from 'react';

export function App() {
const data = React.useRef();
    
  function handleRestart() {
    data.current.clear();
  }
  
  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={data} />
    </div>
  );
}


// -----------------------------------------------------------------------------------------------------------
import React from 'react'

const Form = React.forwardRef(function Form(props,ref) {
    const data = React.useRef();
	React.useImperativeHandle(ref, ()=>{
		return{
			clear(){
			    data.current.reset()
			}
		}
	});
	
	
  return (
    <form  ref={data}>
      <p>
        <label>Name</label>
        <input type="text"  />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
})

export default Form;




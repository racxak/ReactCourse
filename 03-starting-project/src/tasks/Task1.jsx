// Dynamic Styling with Inline Styles
// Your task is to help out a colleague and style a h1 element dynamically (with inline styles) depending on which button was pressed.

// If the "Yes" button is pressed, the h1 element should receive color: "green" as an inline style. If the "No" button is pressed, color: "red" should be applied.

// Initially, when no button has been clicked yet, the color should be set to "white".

// Important: You must use these specific colors ("green", "red", "white") - don't use any hex code or slight variations of these colors!

import React from 'react' 
function App() {
    
const[buttonPressed, setButtonPressed] =React.useState("");

function handleButtonPressed(button){
    setButtonPressed(button)
}
    return (
    <div id="app">
      <h1
      style={{
          color : buttonPressed==="Yes" ? "green": buttonPressed==="No" ? "red" : "white"
      }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick ={()=>handleButtonPressed("Yes")}>Yes</button>
        </li>
        <li>
          <button onClick ={()=>handleButtonPressed("No")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;

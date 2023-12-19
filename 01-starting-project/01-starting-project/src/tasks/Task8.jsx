// You're working on a part of a web app that's responsible for showing a warning when a user is about to perform a dangerous action.

// Therefore, your task is to conditionally show a warning box once a user has clicked a specific button. Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).

import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
    const [proceed, setProceed] = React.useState(true)
    
    function handleClick(clickedButton){
        {clickedButton === "procced"? setProceed(true) : setProceed(false) }
    }
    return (
      <div>
      {proceed ? null : 
     ( <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick = {() => handleClick("procced")}>Proceed</button>
        </div> )}
        <button onClick = {() => handleClick("delete")}>Delete</button>
      </div>    
    );
}
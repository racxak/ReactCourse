// Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.

// The class should be applied when the <button> is clicked for the first time.

import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [applyStyle, setApplyStyle] = React.useState(false)
   
    return (
        <div>
            <p className={applyStyle && "active"}>Style me!</p>
            <button onClick ={()=>setApplyStyle(true)}>Toggle style</button>
        </div>
    );
}

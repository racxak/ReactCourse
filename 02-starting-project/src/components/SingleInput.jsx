import { useState } from "react";

export default function SingleInput({name}){

  const [value, setValue] = useState(0);

  function handleNewData(e){
      setValue(e.target.value)
  }
  
  return(<div> 
    <label>{name}</label>
    <input type="number" value ={value} onChange={handleNewData}></input>
    {value < 0 && <p> Nieprawidłowe dane</p>}
  </div>
  );
};
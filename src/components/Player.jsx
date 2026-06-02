import { useState } from "react";

export default function Players({ symbol, name, isActive, onChgName }) {
  
  const [currentName, setCurrentName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function setInputName(){
    if(isEditing){
      return(<input 
      type="text"
      className="player-name"
      required
      value={currentName}
      onChange= { switchName }
       />)
  }
  return (<input 
      type="text"
      value={currentName}
      disabled />)
  }

function switchName(e) {
  setCurrentName((name) => (name = e.target.value));
}
function switchEditing(){
    setIsEditing(editing => !editing);
    if(isEditing){
      onChgName(symbol, currentName);
    }
}
    
  return (
    <div className={`player flex flex-center ${isActive ? "active" : null}`}>
        {setInputName()}
      <p>
        <b>{symbol}</b>
      </p>
        <button onClick={switchEditing}>
          <small>{isEditing?"save":"edit"}</small>
        </button>
    </div>
  );
}

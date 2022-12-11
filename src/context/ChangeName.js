import { useContext, useState } from "react";
import { UserContext } from "./userContext/UserProvider";

function ChangeName({ onNameChanged }) {

  const [nameInput, setNameInput] = useState("");

  const onButtonClick = () => {  
    onNameChanged(nameInput)
  }

  return (<div>
    <h1>Change Name Value: </h1>
    <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}></input>
    <button onClick={onButtonClick}>Change Name</button>
  </div>)
}

export default ChangeName;
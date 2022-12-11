import { useContext, useState } from "react";
import { UserContext } from "./userContext/UserContext";

function ChangeName() {

  const [nameInput, setNameInput] = useState("");
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const onButtonClick = () => {
    // onNameChanged(nameInput)
    setCurrentUser({
      ...currentUser,
      name: nameInput
    })
  }

  return (<div>
    <h1>Change Name Value: </h1>
    <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}></input>
    <button onClick={onButtonClick}>Change Name</button>
  </div>)
}

export default ChangeName;
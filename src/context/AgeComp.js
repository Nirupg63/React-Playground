import { useContext } from "react";
import { UserContext } from './userContext/UserContext'

function AgeComp() {
    console.log("Age Component rendered")

    const { age } = useContext(UserContext)

    return (<div>
        <h1>Age : {age}</h1>
    </div>)
}

export { AgeComp };
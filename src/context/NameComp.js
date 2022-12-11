import { useContext } from "react";
import { AgeComp } from "./AgeComp";
import { UserContext } from './userContext/UserContext'

function NameComp() {
    console.log("Name Component rendered")

    const { currentUser } = useContext(UserContext)

    return (<div>
        <h1>Name : {currentUser.name}</h1>
        <AgeComp age={currentUser.age}></AgeComp>
    </div>)
}

export { NameComp };
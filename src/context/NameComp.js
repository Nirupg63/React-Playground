import { useContext } from "react";
import { UserContext } from './userContext/UserContext'

function NameComp() {
    console.log("Name Component rendered")

    const { name } = useContext(UserContext)

    return (<div>
        <h1>Name : {name}</h1>
    </div>)
}

export { NameComp };
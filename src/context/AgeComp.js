import { useContext, memo } from "react";
import { UserContext } from './userContext/UserContext'

const AgeComp = memo(function AgeComp({ age }) {
    console.log("Age component Rendered")
    return (<div>
        <h1>Age : {age}</h1>
    </div>)
})

export { AgeComp };
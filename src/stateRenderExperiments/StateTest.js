import { useState } from "react"
import { Name } from './Name'
import { Age } from './Age'

function StateTest() {
    console.log("Parent rendered")

    const [gender, setGender] = useState('m');

    return (<div>
        <h1>Gender: {gender}</h1>
        <button onClick={() => setGender("f")}>Change gender</button>
        <Name></Name>
        <Age></Age>
    </div>)
}

export { StateTest }
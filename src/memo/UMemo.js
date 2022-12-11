import { useState } from "react";
import { useMemo } from "react";

const add400 = (number) => {
    console.log("Adding 400")
    return number + 400;
}

function UMemo() {
    const [count, setCount] = useState(0);
    const [greeting, setGreeting] = useState("Hey");

    const newValue = useMemo(() => add400(count), [count]) ;

    return (<div>
        <h1>Use Memo Example</h1>
        <button onClick={e => setCount(count + 5)}>Add 5</button>
        <h2>Count : {newValue}</h2>
        <button onClick={e => setGreeting(Date.now())}>Change Greeting</button>
        <h1>{greeting}</h1>
    </div>)
}

export default UMemo;
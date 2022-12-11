import { Child1 } from "./Child1"

function ComponentRoot() {
    console.log("Component Root Rendered")

    return (<div>
        <h4>Root</h4>    
        <Child1></Child1>    
    </div>)
}

export { ComponentRoot }
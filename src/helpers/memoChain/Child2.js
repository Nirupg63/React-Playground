import { Child3 } from "./Child3"

function Child2() {
    console.log("Child 2 Rendered")

    return (<div>
        <h4>Child 2</h4>
        <Child3></Child3>
    </div>)
}

export { Child2 }
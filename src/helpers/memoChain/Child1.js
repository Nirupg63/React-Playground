import { Child2 } from './Child2'

function Child1() {
    console.log("Child 1 Rendered")

    return (<div>
        <h4>Child 1</h4>
        <Child2></Child2>
    </div>)
}

export { Child1 }
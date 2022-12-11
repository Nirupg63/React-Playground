import { memo } from "react"
import { Child1 } from "./Child1"

const MemoComponentRoot = memo(function MemoComponentRoot() {
    console.log("Memo Component Root Rendered")

    return (<div>
        <h4>Root</h4>    
        <Child1></Child1>    
    </div>)
})

export { MemoComponentRoot }
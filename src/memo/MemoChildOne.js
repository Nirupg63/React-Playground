import { memo } from "react"
import MemoChildTwo from "./MemoChildTwo"

const MemoChildOne = memo(() => {
    console.log("Rendered Child 1")

    return (<div>
        {/* <h1>Memo Child 1 greeting : {greeting}</h1> */}
        <h1>Memo Child 1 </h1>
        <MemoChildTwo></MemoChildTwo>
    </div>)
})

export default MemoChildOne
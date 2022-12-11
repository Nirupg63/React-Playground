import { useState } from 'react';
import { memo } from 'react';
import MemoChildOne from "./MemoChildOne"

const MemoParent = () => {
    const [count, setCount] = useState(0);

    return (<div>
        <button onClick={e => setCount(count + 5)}>Increment parent count</button>
        <h1>Memo Parent count : {count}</h1>        
        <MemoChildOne></MemoChildOne>
    </div>)
}

export default MemoParent
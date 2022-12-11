import logo from './logo.svg';
import './App.css';
import React, { useState, lazy } from 'react';
import ChangeName from './context/ChangeName';
import { ContextTest } from './context/ContextTest';
import RefTest from './ref/RefTest';
import { Comp1 } from './factory/Comp1';
import { Comp2 } from './factory/Comp2';
import { createComponent } from './factory/Factory';


function App() {
  const [page, setPage] = useState(true);
  const [name, setName] = useState("lol");

  const updateName = (newName) => {
    setName(newName);
  }

  return (
    <div className="App">
      <button onClick={e => setPage(!page)}>Change Page</button>
      <h1>Hello</h1>
      {/* { page ? <PageOne></PageOne> : <Suspense><PageTwo></PageTwo></Suspense>} */}
      {/* { page ? <PageOne></PageOne> : <UMemo></UMemo>}       */}
      {/* { page ? <PageOne></PageOne> : <MemoParent></MemoParent>}       */}

      {/* Context Example */}
      <ContextTest></ContextTest>

      {/* <RefTest></RefTest> */}
      {/* { createComponent('Comp1') } 
      { createComponent('Comp2') }  */}

    </div >
  );
}

export default App;

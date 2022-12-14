import logo from './logo.svg';
import './App.css';
import React, { useState, lazy } from 'react';
import ChangeName from './context/ChangeName';
import { ContextTest } from './context/ContextTest';
import RefTest from './ref/RefTest';
import { Comp1 } from './factory/Comp1';
import { Comp2 } from './factory/Comp2';
import { createComponent } from './factory/Factory';
import { StateTest } from './stateRenderExperiments/StateTest';
import { ContextTest2 } from './context/ContextTest2';
import { ContextTest3 } from './context/ContextTest3';
import { HtmlTest } from './htmlReference/HtmlTest';

function App() {
  const [page, setPage] = useState(true);
  const [name, setName] = useState("lol");

  const updateName = (newName) => {
    setName(newName);
  }

  return (
    <div className="App">
      <h1>React Testing Application</h1>
      <button onClick={e => setPage(!page)}>Change Page</button>
      {/* { page ? <PageOne></PageOne> : <Suspense><PageTwo></PageTwo></Suspense>} */}
      {/* { page ? <PageOne></PageOne> : <UMemo></UMemo>}       */}
      {/* { page ? <PageOne></PageOne> : <MemoParent></MemoParent>}       */}

      {/* Context Example */}
      {/* <ContextTest></ContextTest> */}
      {/* <ContextTest2></ContextTest2> */}
      {/* <ContextTest3></ContextTest3> */}

      {/* <RefTest></RefTest> */}
      {/* { createComponent('Comp1') } 
      { createComponent('Comp2') }  */}

      {/* State Experiments */}
      {/* <StateTest></StateTest> */}

      {/* HTML Experiments */}
      <HtmlTest></HtmlTest>

    </div >
  );
}

export default App;

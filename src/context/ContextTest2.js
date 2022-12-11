import { useState, useMemo } from 'react';
import { NameComp } from './NameComp';
import { AgeComp } from './AgeComp';
import ChangeName from './ChangeName';
// import { ComponentRoot } from '../helpers/componentChain/ComponentRoot';
import { MemoComponentRoot } from '../helpers/memoChain/MemoComponentRoot';
import { GenderComp } from './GenderComp';
import { UserProvider } from './userContext/UserProvider';

// Convert the provider to have children instead of direct components

function ContextTest2() {
    console.log("Context Test 2 component rendered")

    return (<div>
        <UserProvider>
            <ChangeName></ChangeName>
            <NameComp></NameComp>
            <AgeComp></AgeComp>
        </UserProvider>
    </div>)
}

export { ContextTest2 }
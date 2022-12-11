import { useState, useMemo } from 'react';
import { NameComp } from './NameComp';
import { AgeComp } from './AgeComp';
import ChangeName from './ChangeName';
// import { ComponentRoot } from '../helpers/componentChain/ComponentRoot';
import { MemoComponentRoot } from '../helpers/memoChain/MemoComponentRoot';
import { GenderComp } from './GenderComp';
import { UserProvider } from './userContext/UserProvider';
import { UserContext } from './userContext/UserContext';

// Convert the provider to have children instead of direct components

function ContextTest3() {
    const [currentUser, setCurrentUser] = useState({
        name: "Nirup",
        age: 28
    });

    return (<div>
        <UserContext.Provider value={{
            currentUser,
            setCurrentUser
        }}>
            <ChangeName></ChangeName>
            <NameComp></NameComp>
        </UserContext.Provider>
    </div>)
}

export { ContextTest3 }
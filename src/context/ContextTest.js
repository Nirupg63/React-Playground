import { useState, useMemo } from 'react';
import { NameComp } from './NameComp';
import { AgeComp } from './AgeComp';
import { useContext } from 'react';
import { UserContext } from './userContext/UserContext'
import ChangeName from './ChangeName';
// import { ComponentRoot } from '../helpers/componentChain/ComponentRoot';
import { MemoComponentRoot } from '../helpers/memoChain/MemoComponentRoot';
import { useEffect } from 'react';
import { GenderComp } from './GenderComp';

function ContextTest() {
    console.log("Context Test component rendered")
    const [toggle, setToggle] = useState(true);

    const [currentUser, setCurrentUser] = useState({
        name: "Nirup",
        age: 28
    });

    const [gender, setGender] = useState('m')

    const contextValue = useMemo(() => ({
        currentUser
    }), [currentUser])

    return (<div>
        <UserContext.Provider value={contextValue}>
            <ChangeName onNameChanged={(newName) => {
                setCurrentUser({
                    ...currentUser,
                    name: newName
                })
            }}></ChangeName>
            <NameComp></NameComp>
            <AgeComp></AgeComp>
        </UserContext.Provider>

        {/* <ComponentRoot></ComponentRoot> */}
        <MemoComponentRoot></MemoComponentRoot>
    </div>)
}

export { ContextTest }
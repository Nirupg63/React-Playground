import { useState } from 'react';
import { NameComp } from './NameComp';
import { AgeComp } from './AgeComp';
import { useContext } from 'react';
import { UserContext } from './userContext/UserContext'
import ChangeName from './ChangeName';

function ContextTest() {
    const [currentUser, setCurrentUser] = useState({
        name: "Nirup",
        age: 28
    });

    return (<div>
        <UserContext.Provider value={currentUser}>
            <ChangeName onNameChanged={(newName) => {
                setCurrentUser({
                    ...currentUser,
                    name: newName
                })
            }}></ChangeName>
            <NameComp></NameComp>
            <AgeComp></AgeComp>
        </UserContext.Provider>
    </div>)
}

export { ContextTest }
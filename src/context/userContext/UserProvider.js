import { useState, useMemo } from 'react';
import { UserContext } from './UserContext';

function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({
        name: "Nirup",
        age: 28
    });

    return (<UserContext.Provider value={useMemo(() => ({
        currentUser,
        setCurrentUser
    }), [currentUser, setCurrentUser])}>
        {children}
    </UserContext.Provider>)
}

export { UserProvider }
import { createContext } from 'react'

const UserContext = createContext({
    name: "default",
    age: 0
})

export { UserContext }
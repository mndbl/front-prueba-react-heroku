import { useReducer } from "react";
import UserContext from "./UserContext"
import { initialState, userReducer } from "./userReducer";



export const UserProvider = ({ children }) => {
    const [userStore, dispatch] = useReducer(userReducer, initialState)
    
    return (
        <UserContext.Provider value={[userStore, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}
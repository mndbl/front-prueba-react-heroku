import { useReducer } from "react";
import GlobalContext from "./GlobalContext"
import { initialStates, globalReducer } from "./globalReducer";



export const GlobalProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={useReducer(globalReducer, initialStates)}>
            {children}
        </GlobalContext.Provider>
    )
}
import React,{createContext} from "react";

export const GlobalContext=createContext()
const GlobalContextProvider=(props)=>{
    return(
        <GlobalContext.Provider value={'React Js is a library of javascript. and easy to learn'}>
            {props.children}
        </GlobalContext.Provider>

    )
}
export default GlobalContextProvider
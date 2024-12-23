import { createContext } from "react";
import { developers } from "../assets/assets";

export const AppContext=createContext();

const AppContextProvider=(props)=>{
    const currencySymbol='$'
    const value={
developers,currencySymbol
    }
    return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
     )
}

export default AppContextProvider
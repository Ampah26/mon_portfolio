 import { Children, createContext, useState } from "react";
 const AuthContext = createContext({});

 export const AutProvider = ({Children})=> {
    const [auth, setAuth]= useState({});

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
                {Children}
        </AuthContext.Provider>
    )
 }
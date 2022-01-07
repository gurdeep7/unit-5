import { createContext, useState } from "react";

export const ThemeContext = createContext({Theme:"", toggleTheme:()=>{}})
 


export const ThemeContextProvider = ({children}) =>{

    const [Theme,setTheme] = useState("light")

    const toggleTheme = () =>{
        setTheme( Theme === "light" ? "dark":"light")
    } 

    return <ThemeContext.Provider value={{Theme,toggleTheme}}>
        ({children})
    </ThemeContext.Provider>
}
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Cart } from "./Cart"

export const Navbar =()=>{
    const {Theme} = useContext(ThemeContext)
    return   <div>
        Theme is: {Theme}
        <Cart />
    </div>
}
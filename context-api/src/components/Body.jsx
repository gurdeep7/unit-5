import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const Body = ()=>{
    const {handleCartUpdate} = useContext(CartContext)
    return <div>
        <button onClick={()=>{
            handleCartUpdate(1)
        }}>
buy Laptop
        </button>

    </div>
}
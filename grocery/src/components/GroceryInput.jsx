import { useState } from "react"

export const GroceryInput = ({getData}) =>{
const [text, setText] = useState("")
const handleChange = (e) =>{
    setText(e.target.value)
}

const handleClick = ()=>{
   getData(text)
}
    return(
        <div style={{width:"300px"}}>
        <input type="text" style={{width:"300px"}} placeholder="Enter Todo" onChange= {handleChange}  />
        
        <button onClick={handleClick}>Add Grocery</button>
        </div>
    )
}
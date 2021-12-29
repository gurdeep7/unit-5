import { useEffect, useState } from "react";

export const Form = () =>{
    const [counter, setCounter] = useState(0)
    const [age,setAge] = useState(10)
console.log("Before Effect")
useEffect(()=>{
    console.log("Inside useeffect")
})
console.log("After useeffect")
return (
    <form>
        <input type={"text"}></input>
        <button></button>
    </form>
) 
}
import { useEffect } from "react";
import { useState } from "react";

export const Form=()=>{
    const [counter, setCounter] = useState(0)
    const [age, setAge] = useState(10)
    console.log("Before useEffect");
    useEffect(()=>{
        console.log("First effect")
    },[counter])
    useEffect(()=>{
        //mounting
        console.log("Second useEffect")
    },[age])
    console.log("After useEffect");
    
    return (
        <div>
            <h3>
                Counter:{counter}
            </h3>
            <button onClick={()=>{
                setCounter(counter + 1)
            }}>increase </button>
        </div>
    )
}
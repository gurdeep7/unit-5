import { useState } from "react"

export const Assignment = ({getData,getend})=>{
    const [counter,setCounter] = useState(5)
    const startTime =(e)=>{
        setCounter(+e.target.value)
console.log(counter,"counter")
getData(counter)

    }
    const endTime = (e)=>{
        console.log(e.target.value)
getend(+e.target.value)
    }
   
return(
    <div>
        <input type="number" onInput={startTime} placeholder="Start Time"/>
        <input type="number" placeholder="End Time" onInput={endTime}/>
    </div>
)
}
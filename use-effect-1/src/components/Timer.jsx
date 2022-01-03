import { useEffect, useState } from "react"
import { Assignment } from "./Assignment"
export const Timer = ()=>{
    const [counter,setCounter] = useState()
    const [end,setEnd] = useState(0)
    var e;
const endTime = (data)=>{
    e = data
   return e
   // console.log("e",e)
}
    useEffect(() =>{
        const id= setInterval(()=>{
             setCounter((p)=>{
                 var end1 = endTime()
                 console.log(p,end1)

                 if(p===end1){
                    //clearInterval(id)
                     return end1
                 }
                 return p-1})
         },1000)
         return()=>{
             //unMounting
             console.log("unomunting")
            clearInterval(id)
         }
     },[])
     const startTime = (data)=>{
        setCounter(data)
    }
    
    return <div>
        <Assignment onInput={startTime} getData={startTime} getend={endTime}/>
        count is : {counter}
    </div>
}
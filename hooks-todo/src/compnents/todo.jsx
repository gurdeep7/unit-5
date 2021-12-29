import { useState } from "react";
import {TodoInput} from "./TodoInput"
import { TodoItem } from "./TodoItem";
import {nanoid} from "nanoid"

export const Todo =() =>{
const  [list,setList] = useState([])
    const handleClick = (data) =>{
        console.log("Data in Parent", data)
        const payload = {
            title: data,
            status: false,
            id:nanoid(7)
        }
        console.log(payload.id)
        setList([...list,payload])
    };

    const handleToggle = (id)=>{
       list.map((e)=>{
           if(e.id === id){
               e.status = true
           }
       })
       setList([...list])
    }
    const handleDelete = (id)=>{
      const listn = list.filter((e)=>{
            if(e.id !== id){
                return e
            }
        })
        //console.log(listn)
        setList([...listn])
    }
    return <>
     
<TodoInput getData= {handleClick}/>
{
    list.map((e,i)=>(
        <TodoItem key={e.id} {...e} handleToggle={handleToggle} handleDelete = {handleDelete} />
    ))
}
    </>
}
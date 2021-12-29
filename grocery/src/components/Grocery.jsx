import { useState } from "react";
import {GroceryInput} from "./GroceryInput"
import { GroceryList } from "./GroceryList";
import {nanoid} from "nanoid"

export const Grocery =() =>{
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
     <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto"}}>
<GroceryInput getData= {handleClick}/>
{
    list.map((e,i)=>(
        <GroceryList key={e.id} {...e} handleToggle={handleToggle} handleDelete = {handleDelete} />
    ))
}
</div>
    </>
}
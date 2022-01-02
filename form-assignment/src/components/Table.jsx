import { useState } from "react";
import { Form } from "./Form";
import {nanoid} from "nanoid";
import { TableItem } from "./TableItem";

export const Table =() =>{
    const  [list,setList] = useState([])
    const handleonSubmit= (data) =>{
        console.log("Data in Parent", data)
        const payload = {
            data: data,
            status: false,
            id:nanoid(7)
        }
        console.log(payload.id)
        setList([...list,payload])
    };
        
        
        return <>
      
         <Form getData= {handleonSubmit}/>
         <table>
    {
        list.map((e,i)=>(
            <TableItem key={e.id} {...e}  />
        ))
    }
    </table>
    {console.log("table-list",list)}
        </>
    }
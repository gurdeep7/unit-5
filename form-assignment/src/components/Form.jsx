import { useState } from "react"
import {nanoid} from "nanoid"
export const Form =({getData})=>{

    const[form,setForm]= useState({
        name:"",
        age:"",
        address:""
    })
    
const  [list,setList] = useState([])
    

const handleChange =(e) =>{
   
console.log(e.target.name, e.target.value)
const {name,value} = e.target;
setForm({
    ...form,
    [name]:value,
})
}

const handleSubmit =(data)=>{
data.preventDefault()
        console.log("Data in Parent", data)
        const payload = {
            data:form,
            status: false,
            id:nanoid(7)
        }

        console.log(payload.id)
        setList([...list,payload])
        getData(form)

        console.log("list",list)
    console.log("form",form)
return
}

return(
    <>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="enter name"></input>
        <input onChange = {handleChange} type="text" name="age" placeholder ="enter age"></input>
        <input onChange = {handleChange} type="text" name="address" placeholder="address"></input>
        <select onChange = {handleChange} name="Department">
            <option>Select Department</option>
            <option value="ECE">ECE</option>
            <option value="Mechanicial">Mechanical</option>
            <option value= "CSE">CSE</option>
        </select>
        <input onInput={handleChange} type="number" name="salary" placeholder="salary"></input>
        
        <input
          type="checkbox"
          onChange={handleChange}
          name="married"
          
          />
        <label htmlFor="married">Married</label>
        <input type="file"></input>
        <input type="submit" value="submit" onSubmit={handleSubmit}></input>
    </form>
    

    </>
)
}


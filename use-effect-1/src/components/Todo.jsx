import { useEffect, useState } from "react"

export const Todo =() =>{
const [text, setText] = useState("")
const [todos, setTodos] = useState([])
const [page,setPage] = useState(1)
useEffect(()=>{
    getTodos()
},[page])
const addTodos = ()=>{
    const payload={
        title:text,
        ststus:false
    }
    fetch("http://localhost:3001/todos",{
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "content-type":"application/json"
        }
    }).then(()=>{
        getTodos()
    })
    
}

const getTodos = ()=>{
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
    .then(d => d.json())
    .then(res =>{
        setTodos(res)
    })
}

    return <div>
        <input value={text}
        type="text"
        onChange={(e)=>{
            
            setText(e.target.value)
        }}
        placeholder="Enter Todo"
        />
        <button onClick={addTodos}>
            add todo
            
        </button>
        {todos.map((e,i)=>(
            <div key={i}>{e.title}</div>
        ))}

        {/* Pagination */}
        <button disabled={page === 1} onClick={()=>setPage(page-1)}>Prev</button>
        <button disabled={page === 3} onClick={()=>setPage(page+1)}>Next</button>
    </div>
}
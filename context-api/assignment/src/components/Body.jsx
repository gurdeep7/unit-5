import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContextProvider"


export const Body = ()=>{

    const auth = useContext(AuthContext)

    const [form, setForm] = useState({})

    const onChangeer = (e)=>{
        const [name,value] = e.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const login = ()=>{
console.log(form)
    }

    return <div>
        <input type="email" onChange={onChangeer} name="email"/>

        <input type="password" onChange={onChangeer} name="password"/>
        <input type="button" onClick={login}>Login</input>

    </div>
}
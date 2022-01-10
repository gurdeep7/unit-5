import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <div style={{margin:"10px"}}>
            <Link to="/">Home </Link>
            <Link to="/about">About </Link> 
            <Link to="/contact">Contact </Link>
            <Link to= "/products">products</Link>
        </div>
    )
}
import { Link } from "react-router-dom";


export const Users = ()=>{
    var arr = [1,2,3,4,5]
    return (
       <div>
             {arr.map((e, i)=>{
                return <div key={i} style={{margin:"10px"}}>
                <Link to = {`/users/${e}`}>User {e}</Link>
                
                </div>
            })} 
            
            </div>
    )
}
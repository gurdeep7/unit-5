import { Link } from "react-router-dom";


export const Products = ()=>{
    var arr = [1,2,3,4,5]
    return (
       <div>
             {arr.map((e, i)=>{
                return <div key={i} style={{margin:"10px"}}>
                <Link to = {`/users/${e}`}>Products {e}</Link>
                
                </div>
            })} 
            
            </div>
    )
}
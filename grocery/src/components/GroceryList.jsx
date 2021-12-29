export const GroceryList = ({title,status,id,handleToggle,handleDelete}) =>{
    
    return(
        <div style={{textDecoration: status?"line-through":"none",backgroundColor:status?"green":"none",width:"300px",margin:"20px"}}>
        <img style={{width:"200px"}} src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1141999659%2F0x0.jpg"></img>
        <div >{title}- {status ?"Done":"Not Done"}
        </div>
        <button onClick={()=> handleToggle(id)}>Mark as done</button>
        <button style={{margin:"5px"}} onClick={()=> handleDelete(id)}>Delete</button>
        
        </div>
    )
}
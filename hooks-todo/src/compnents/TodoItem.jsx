export const TodoItem = ({title,status,id,handleToggle,handleDelete}) =>{
    return(
        <>
        <div>{title}- {status ?"Done":"Not Done"}
        <button onClick={()=> handleToggle(id)}>Mark as done</button>
        <button style={{margin:"5px"}} onClick={()=> handleDelete(id)}>Delete</button>
        </div>
        </>
    )
}
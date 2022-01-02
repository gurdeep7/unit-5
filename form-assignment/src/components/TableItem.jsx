export const TableItem= ({data}) =>{
    console.log("tableItem")
    console.log(data)
    return(
        <tr>
            <th>name : {data.name}</th>
            <th>Age:{data.age}</th>
            <th>address:{data.address}</th>
            <th>Department:{data.Department}</th>
            <th>salary:{data.salary}</th>

        </tr>
    )
}
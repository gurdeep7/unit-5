import { useParams } from "react-router-dom"

export const UserDetails = () =>{
    const {userid} = useParams()

    return <div>
        <h1>fetch of data user {userid}  </h1>
    </div>
}
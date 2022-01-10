import { useParams } from "react-router-dom"

export const UserDetails = () =>{
    const {userid} = useParams()

    var arr = [
        {id:1,
            title: "Laptop ",
            price:"₹40000"
    
    },
    {
        id:2,
        title:"LED BULD",
        price:"₹55"
    },
    {
        id:3,
        title:"Solar Panel",
        price:"7000"
    },
    {
        id:4,
        title:"Maggi-combo",
        price:"₹4"
    },
    {
        id:5,
        title:"Tablet",
        price:"₹15999"
    }
    ]
    
        var product = arr.filter((e)=>{
            if(e.id == userid){
                return e;
            }
        })
    console.log(product);
    return <div>
        <h1>Product:- {product[0].title}  </h1>
        <h1>Price:- {product[0].price}</h1>
    </div>
}
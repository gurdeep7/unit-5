import React from "react";


class AnotherList extends React.Component{
    
    render(){
        const arr = ["Samsung","HTC","Micromax","Apple"]
        return(
            <div>
                <h1>Mobile Manufacturers</h1>
                <li style={{listStyle:"square"}}>{arr[0]}</li>
                <li style={{listStyle:"square"}}>{arr[1]}</li>
                <li>{arr[2]}</li>
                <li style={{listStyle:"circle"}}>{arr[1]}</li>
            </div>
        )
    }
}

export default AnotherList
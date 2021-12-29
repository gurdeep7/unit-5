import './App.css';
import {useState} from "react"

function App() {
  const [data,setData] = useState("")
  const handleData = (name)=>{
console.log("Parent Recieved",name)
setData(name)
  }
  return (
    <div className='App'>
      <h3>Child received</h3>
  <Child1 handleData={handleData}/>
      <Child2 data ={data}/>
    </div>
  )


function Child1({handleData}) {
  const data = "Masai School";
  handleData(data)
  return <h3>Child Received:{data}</h3>
}

function Child2({data}) {
  return <div>Child 2 recived:{data} </div>
}
}

export default App;

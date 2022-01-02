import logo from './logo.svg';
import './App.css';
import {useState, useRef} from "react"


function App() {
 let test = useRef(1)
 // const [mouse,setMouse] = useState("");
  const [dummy,setDummy]= useState(1)
  console.log(test)
  return (
    
    <div className="App">
      {/* <button onClick={(e)=>{console.log(e)} }>Click </button>
      <input />
      <div className='box'
       onMouseMove={(e)=>{
        console.log(e.clientX, e.clientY);
        setMouse(`X-${e.clientX}- Y- ${e.clientY}`)
      }}
      >
        {mouse}
      </div> */}
      <button onClick={()=>{ 
        test.current += 1
      console.log(test)
      }}>
        Increment Test
      </button>
      <button onClick={()=>{
        setDummy((p)=> p+1)
      }}>
        rerender
      </button>
    
    </div>
  );
}

export default App;

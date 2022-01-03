import { Assignment } from './components/Assignment';
import './App.css';
import { Todo } from './components/Todo';
import {Form} from "./components/form";
import { Timer } from './components/Timer';
import { useState } from 'react';
function App() {
  const [show,setShow] = useState(false)
  
   
  

  return (
    <div className="App">
  {show ? <Timer />:null}
      <button onClick={()=>setShow(!show)}> {show ? "Hide":
    "show"}</button>
    </div>
  );
}

export default App;

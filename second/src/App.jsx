import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]= useState(0);

  const changeCount =(value) =>{
setCount(count +value)

  };

  const mulCount = ()=>{
    setCount(count * 2)
  }
  
 return(
 
<div className='App'>
<h3>Counter : {count}</h3>
<button onClick={()=>changeCount(1)}>Add 1</button>
<button onClick={()=>changeCount(-1)}>sub 1</button>
<h5>The cunter is {count % 2 == 0? "Even":"Odd"}</h5>
<button onClick={()=>mulCount()}>Multibply by 2</button>
</div>
  );
}

export default App;

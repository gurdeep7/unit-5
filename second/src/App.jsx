import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]= useState(0);

  const changeCount =(value) =>{
setCount(count +value)
  };

  if(count > 10){
    return(
      <div>Counter Reaches Maximum value</div>
    )
  }
 return(
 
<div className='App'>
<h3>Counter : {count}</h3>
<button onClick={()=>changeCount(1)}>Add 1</button>
<button onClick={()=>changeCount(-1)}>sub 1</button>
<h5>The cunter is {()=>{if(count % 2 == 0)"Even"}}</h5>
</div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ["wake up", "have tea", "Attend Standup"]
  return (
  //  <div className = "App">
  //  <h1>
  //  <img src= {logo}/>
  //  </h1>
  //  {[1,2,3,4,5].map((e)=>(
  //    <h1>Hello {e}</h1>
  //  )) }

  
  //  </div>
  <div className='App'>

    {arr.map((e)=>(
      <Todos num ={e} age= {2} name ={""} />
    ))}
    
    

  </div>
  );
}

function Todos( {num,age,name}) {
  return <h1>Todo :{num} age:{age} name:{name}</h1>
}

export default App;

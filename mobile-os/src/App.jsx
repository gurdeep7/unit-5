import './App.css';

import AnotherList from './anotherList';

function App() {
  const arr = ["Android","Blackberry","iPhone","Windows phone"]
  return (
    <div className="App">
      <h1>Mobile Operating Systems</h1>
      
      {arr.map((e)=>(
        
        <List os= {e}/>
      ))}
      <AnotherList />
     
    </div>
  );
}

function List({os}){
  console.log(os)
return <li>{os}</li>
}

export default App;

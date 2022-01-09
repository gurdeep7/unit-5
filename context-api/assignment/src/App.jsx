import './App.css';
import { Navbar } from './components/Navbar';

import { Body } from './components/Body';



function App() {
  try{
    console.log(Body)
  }catch(e){
    console.log(e, "error")
  }
  return (
    <div className="App">
      <Navbar>
      </Navbar> 
      <ErrorBoundary>

      </ErrorBoundary>
     
    </div>
  );
}

export default App;

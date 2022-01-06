import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import { Home } from './components/Home';
import { About } from './components/About';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"}></Route>
        <Route path={"/home"} element= {<Home />} />
        <Route path={"/about"} element= {<About />}>
    
    </Route>
      </Routes>
      
    </div>
  );
}

export default App;

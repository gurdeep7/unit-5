import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { addTodo } from './store/action';
import { Todos } from './components/Todos';
function App() {
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Todos/>
    </div>
  );
}

export default App;

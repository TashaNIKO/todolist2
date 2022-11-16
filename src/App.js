
import './App.css';
import {ToDoList} from './ToDoList';
import imageOne from './one.jpg';
import imageTwo from './two.jpg';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src={imageOne} width="250px" alt='diary'/>
      </div>
      <div className='container'>
      <h1>To Do List</h1>
      </div>
      <div className='container'>
      <ToDoList/>
      </div>
      <div className='container'>
      <img src={imageTwo} width="250px" alt='bike'/>
    </div></div>
  );
}

export default App;

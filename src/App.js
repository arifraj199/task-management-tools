import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CompletedTask from './components/CompletedTask';
import ToDo from './components/ToDo';
import Calender from './components/Calender';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/completedtask' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;

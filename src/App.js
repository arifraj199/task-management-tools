import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CompletedTask from './components/CompletedTask';
import ToDo from './components/ToDo';
import Calender from './components/Calender';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addtask' element={<AddTask></AddTask>}></Route>
        <Route path='/completedtask' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

import './App.css';
import Footer from '../src/Component/Footer'
import Header from './Component/Header';
import Home from './Pages/Home';
import Calendar from './Pages/Calendar';
import CompleteTask from './Pages/CompleteTask';
import ToDo from './Pages/ToDo';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/to-do' element={<ToDo/>}/>
        <Route path='/completed-task' element={<CompleteTask/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

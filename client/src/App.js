import './App.css';
import { Routes,Route } from "react-router-dom"
import Home from './components/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import List from './components/List/List';
import Hotel from './components/Hotel/Hotel';

function App() {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='hotel' element={<List/>}></Route>
        <Route path='hotel/:id' element={<Hotel/>}></Route>
       </Routes>
       
    </div>
  );
}

export default App;

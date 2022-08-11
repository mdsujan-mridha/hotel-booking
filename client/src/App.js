import './App.css';
import { Routes,Route } from "react-router-dom"
import Home from './components/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
       </Routes>
       <Footer />
    </div>
  );
}

export default App;

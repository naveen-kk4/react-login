import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Components/Home.js"
import About from "./Components/About.js"
import './App.css';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

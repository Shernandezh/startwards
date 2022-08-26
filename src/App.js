import './App.css';
import Home from './pages/Home.js';
import  Personajes  from './pages/Personajes';
import  Planetas  from './pages/Planetas';
import {Routes,Route} from 'react-router-dom';
import personajedeta from './pages/personajedeta'

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}></Route>
      <Route path = '/personajes' element = {<Personajes/>}></Route>
      <Route path = '/planetas' element = {<Planetas/>}></Route>
      <Route path = '/personajedeta' element = {<personajedeta/>}></Route>
    </Routes>
  );
}
  
export default App;

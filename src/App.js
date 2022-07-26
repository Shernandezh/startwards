import './App.css';
import NavbarApp from './components/NavbarApp/NavbarApp'
import CaruselApp from './components/CaruselApp/CaruselApp'
import TextApp  from './components/TextApp/TextApp';
import CardsApp from './components/CardsApp/CardsApp';

function App() {
  return (
    
    <div className="App">
      <NavbarApp/>
      <CaruselApp/>
      <TextApp/>
      <CardsApp/>
    </div>
  );
}
  
export default App;

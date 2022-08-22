import './App.css';
import Navbar from './components/NavBar/navbar';
import { ItemListContainer } from './components/ItemListContainer/itemListContainer';
import { ItemCount } from './components/itemCount/itemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting= 'Federico'/>
      <ItemCount/>
    </div>
  );
}

export default App;

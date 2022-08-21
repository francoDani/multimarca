import './App.css';
import Navbar from './components/NavBar/navbar';
import { ItemListContainer } from './components/ItemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting= 'Jesus'/>
    </div>
  );
}

export default App;

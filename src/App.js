import './App.css';
import Navbar from './components/NavBar/navbar';
import { ItemList } from './components/ItemList/itemList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList greeting= 'Federico'/>
    </div>
  );
}

export default App;

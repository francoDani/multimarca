import './App.css';
import Navbar from './components/NavBar/navbar';
/* import { ItemList } from './components/ItemList/itemList'; */
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;

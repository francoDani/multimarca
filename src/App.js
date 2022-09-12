import './App.css';
import Navbar from './components/NavBar/navbar';
import { ItemList } from './components/ItemList/itemList';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/ItemDetail' element={<ItemDetailContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
  <body>
    <ItemListContainer/>
  </body>
    </div>
  );
}

export default App;

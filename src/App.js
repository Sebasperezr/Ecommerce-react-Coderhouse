
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

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

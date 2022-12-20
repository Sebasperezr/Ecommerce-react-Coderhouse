import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Router from "./router/Router.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="app-container">
       <Router/>
      </div>
    </div>
  );
}

export default App;

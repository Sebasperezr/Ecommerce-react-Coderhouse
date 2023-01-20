import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { CartProvider } from "./context/cartContext";
import Router from "./router/Router.jsx";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <div className="app-container">
          <Router />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;

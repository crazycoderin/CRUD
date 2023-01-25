import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing/>}></Route>
          <Route path="/product/:productId" element={<ProductDetails/>}></Route>
          <Route>404 Not found</Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

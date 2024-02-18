import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shopdetail" element={<ProductDetails />} />
        <Route path="/shopdetail/:id" element={<ProductDetails />} />
        <Route path="/product/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;

import Items from "./pages/Items";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProductsDetails from "./components/ProductsDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Items inicio="Productos" />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </>
  );
}

export default App;

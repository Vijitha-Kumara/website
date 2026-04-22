import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nabar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { useState } from "react";
import { products } from "./data/products";
function App() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };
  const removedItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nabar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <div className="container">
          <h1>Simple Shopping Cart</h1>
          <div className="products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
          <Cart cart={cart} removedItem={removedItem} />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;

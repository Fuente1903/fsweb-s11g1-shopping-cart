import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductProvider } from "./components/ProductContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";


function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
  };

  return (
    <ProductProvider>
       <div className="App">
      <Navigation cart={cart} />
       </ProductProvider>
    


      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products products={products} addItem={addItem} />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </main>
    </div>
  );
}

export default App;

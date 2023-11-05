import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Login, Main, Navbarcomponent, OpenOrder, Order, OurProduct, PageNotFound, Profile, Register,
} from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarcomponent />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/products" element={<OurProduct />} />

          <Route exact path="/account" element={<Profile />} />
          <Route exact path="/account/orders" element={<Order />} />
          <Route exact path="/account/orders/:id" element={<OpenOrder />} />
          <Route exact path="/account/cart" element={<Cart />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

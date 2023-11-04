import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Navbarcomponent, OpenOrder, Order, PageNotFound, Profile,
} from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarcomponent />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/account" element={<Profile />} />
          <Route exact path="/account/orders" element={<Order />} />
          <Route exact path="/account/orders/:id" element={<OpenOrder />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cart, Login, Main, Navbarcomponent, OpenOrder, Order, OurProduct, PageNotFound, ProductOpen, Profile, Register,
} from "./components";
import { ClientContext } from "./ClientContext";
import axios from "axios";

function App() {
  
  const [isLogged,setIsLogged] = useState(sessionStorage.getItem("token")?true:false)
  const [CartProducts, setCartProducts] = useState([])
  const [Orders,setOrders] = useState([])
  const [token,setToken] = useState(sessionStorage.getItem("token"))

  useEffect(() => {
    // fetchFeatured();
    // fetchAllproduct();
    // fetchAllCategories();
    if(isLogged&&token){

      usersData(token);
    }
  }, [isLogged,token]);

  const usersData = async (token) => {

    try {
      const response = await axios.get("http://localhost:8000/api/user/data",        {
        headers: {
          Authorization: "Bearer " + token, // Set the Authorization header
        },
      })
      if (response.status === 200) {
        // console.log(JSON.parse(response?.data?.user?.orders ? response?.data?.user?.orders : []))
        setOrders(JSON.parse(response?.data?.user?.orders ? response?.data?.user?.orders : []));
        setCartProducts(JSON.parse(response.data.user?.carts ? response.data.user?.carts : []));
      }
    } catch (error) {
      toast.error(error.response)
      
    }
  }


  return (
    <ClientContext.Provider value={{isLogged,setIsLogged,CartProducts,setCartProducts,OrdersIds:Orders,setOrders,token,setToken}}>
      <BrowserRouter>
        <Navbarcomponent />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/products" element={<OurProduct />} />
          <Route exact path="/products/:id" element={<ProductOpen />} />

          <Route exact path="/account" element={<Profile />} />
          <Route exact path="/account/orders" element={<Order />} />
          <Route exact path="/account/orders/:id" element={<OpenOrder />} />
          <Route exact path="/account/cart" element={<Cart />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="dark"/>
    </ClientContext.Provider>
  );
}

export default App;

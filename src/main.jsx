
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// import App from "./app";
import Home from "./components/Home";
import './index.css';
import Category from "./components/Category";
import About from "./About";
import RootLayout from "./components/RootLayout";
import ProductDetails from "./components/ProductDetails";
import 'react-toastify/dist/ReactToastify.css';
import Context from "./components/context/Context";
// import{index } from "index.css"@headlessui/react;

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    {/* <Routes >
      <Route path="/products" element={<Category/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes> */}
<Context>
    <Routes>
          <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Category />} />  
              <Route path="/about" element={<About />} />
              <Route path="/product-detail/:productId" element={<ProductDetails/>} />
      {/* Fixed missing closing tag */}
          </Route>
      </Routes>
  </Context>    
  </BrowserRouter>
);

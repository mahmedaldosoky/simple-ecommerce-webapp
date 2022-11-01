import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { Routes, Route, Navigate } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [cartProductsNum, setCartProductsNum] = useState(0);
  return (
    <>
      <NavbarComponent cartProductsNum={cartProductsNum}></NavbarComponent>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="categories/:category"
          element={
            <Category
              cartProductsNum={cartProductsNum}
              setCartProductsNum={setCartProductsNum}
            />
          }
        />
      </Routes>
      <Footer></Footer>{" "}
    </>
  );
}

export default App;

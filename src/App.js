import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Navvar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
// 2주차_1. 미션
// 상단 메뉴 디자인이 끝나있어야 한다.
// 특히 서치박스 디자인이 되어있어야 한다.

// 1. Router
function App() {
  return (
    <div>
      <Navvar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductAll />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;

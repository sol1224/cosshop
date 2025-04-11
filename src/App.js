import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import Navvar from "./components/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
import api from "./utils/api";
import { useSearchParams } from "react-router-dom";
import HomeBottom from "./components/HomeBottom";
import Footer from "./components/Footer";

// 2주차_1. 미션
// 상단 메뉴 디자인이 끝나있어야 한다.
// 특히 서치박스 디자인이 되어있어야 한다.

// 1. Router
function App() {
  const [productList, setProductList] = useState([]);
  const [authenticate, setAuthenticate] = useState(true);
  const [query, setQuery] = useSearchParams();
  const [item, setItem] = useState("");
  const [user, setUser] = useState("");
  const [sex, setSex] = useState("");

  const getProductList = async () => {
    if (sex) {
      const response = await api.get(`/product/${sex}`);
      setProductList(response.data.data);
    } else {
      let searchQuery = query.get("search" || "");
      console.log("searchQuery", searchQuery);
      const response = await api.get("/product", { params: { searchQuery } });
      setProductList(response.data.data);
    }
  };

  useEffect(() => {
    getProductList({});
  }, [query, sex]);

  return (
    <div>
      <Navvar user={user} setSex={setSex} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={
            <Login
              user={user}
              setUser={setUser}
              setAuthenticate={setAuthenticate}
            />
          }
        />
        <Route
          path="/product"
          element={<ProductAll query={query} productList={productList} />}
        />
        <Route
          path="/product/women"
          element={<ProductAll query={query} productList={productList} />}
        />
        <Route
          path="/product/man"
          element={<ProductAll query={query} productList={productList} />}
        />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute
              user={user}
              authenticate={authenticate}
            ></PrivateRoute>
          }
        />
      </Routes>
      <HomeBottom />
      <Footer />
    </div>
  );
}

export default App;

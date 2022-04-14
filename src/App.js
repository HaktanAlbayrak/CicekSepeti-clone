import "./assets/scss/app.scss";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [categoryInfo, setCategoryInfo] = useState({
    id: 1,
    name: "Tüm Kategoriler",
  });
  const [searchValue, setSearchValue] = useState();

  // shopping cart
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const pushCategoryInfo = (category) => {
    if (category === undefined) {
      return;
    }
    setCategoryInfo(category);
  };

  const pushProduct = (product) => {
    if (product === undefined || product === "") {
      return;
    }
  };

  useEffect(() => {}, [cart, total]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Topbar
        setSearchValue={setSearchValue}
        pushProduct={pushProduct}
        cart={cart}
      />
      <Header total={total} cart={cart} />
      <Categories pushCategoryInfo={pushCategoryInfo} />
      <Products
        categoryInfo={categoryInfo}
        searchValue={searchValue}
        cart={cart}
        setCart={setCart}
        total={total}
        setTotal={setTotal}
      />
      <Offers />
      <Footer />
      <div className="copyright">
        <p>Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş</p>
      </div>
    </div>
  );
}

export default App;

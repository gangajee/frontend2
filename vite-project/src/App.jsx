import "./App.css";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Product_header from "./components/Product_header/Product_header";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <div className="abPosition">
        <Header />
        <Search />
      </div>
      <div className="contentWrapper">
        <Category />
        <hr />
        <Product_header />
        <Product />
        <Footer />
      </div>
    </div>
  );
}

export default App;

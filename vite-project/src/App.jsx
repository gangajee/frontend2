import "./App.css";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Product_header from "./components/Product_header/Product_header";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Category />
      <hr />
      <Product_header />
      <Product />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Product_header from "./components/Product_header/Product_header";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

const Mockdata = [
  {
    id: 0,
    name: "아이폰13 (새상품)",
    price: 800000,
    category: "digital",
    thumnail: "./assets/SmartPhone.jpeg",
    platform: "번개장터",
    date: new Date().getTime(),
  },

  {
    id: 1,
    name: "카메라",
    price: 400000,
    category: "Camera",
    thumnail: "./assets/Camera.jpeg",
    platform: "중고나라",
    date: new Date().getTime(),
  },

  {
    id: 2,
    name: "1인용 소파",
    price: 100000,
    category: "Interior",
    thumnail: "./assets/Couch.jpeg",
    platform: "번개장터",
    date: new Date().getTime(),
  },

  {
    id: 3,
    name: "맥북",
    price: 1000000,
    category: "Laptop",
    thumnail: "./assets/Laptop.jpeg",
    platform: "중고나라",
    date: new Date().getTime(),
  },

  {
    id: 4,
    name: "아이다스 운동화",
    price: 100000,
    category: "Fashion",
    thumnail: "./assets/Shoes.jpeg",
    platform: "번개장터",
    date: new Date().getTime(),
  },

  {
    id: 5,
    name: "서핑 보드(새 상품)",
    price: 50000,
    category: "Sports",
    thumnail: "./assets/SurfingBoard.jpeg",
    platform: "번개장터",
    date: new Date().getTime(),
  },

  {
    id: 6,
    name: "오메가 시계",
    price: 1000000,
    category: "Watch",
    thumnail: "./assets/Watch.jpeg",
    platform: "번개장터",
    date: new Date().getTime(),
  },
];

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

import "./App.css";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Product_header from "./components/Product_header/Product_header";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import { useState } from "react";

const Mockdata = [
  {
    id: 0,
    name: "아이폰13 (새상품)",
    price: 800000,
    category: "Digital",
    thumnail: "/assets/SmartPhone.jpeg",
    platform: "번개장터",
    date: "2026-1-1",
  },

  {
    id: 1,
    name: "카메라",
    price: 400000,
    category: "Camera",
    thumnail: "/assets/Camera.jpeg",
    platform: "중고나라",
    date: "2025-12-1",
  },

  {
    id: 2,
    name: "1인용 소파",
    price: 100000,
    category: "Interior",
    thumnail: "/assets/Couch.jpeg",
    platform: "번개장터",
    date: "2025-11-10",
  },

  {
    id: 3,
    name: "맥북",
    price: 1000000,
    category: "Laptop",
    thumnail: "/assets/Laptop.jpeg",
    platform: "중고나라",
    date: "2026-1-17",
  },

  {
    id: 4,
    name: "아이다스 운동화",
    price: 100000,
    category: "Fashion",
    thumnail: "/assets/Shoes.jpeg",
    platform: "번개장터",
    date: "2026-2-1",
  },

  {
    id: 5,
    name: "서핑 보드(새 상품)",
    price: 50000,
    category: "Sports",
    thumnail: "/assets/SurfingBoard.jpeg",
    platform: "번개장터",
    date: "2025-12-12",
  },

  {
    id: 6,
    name: "오데마 시계",
    price: 1000000,
    category: "Watch",
    thumnail: "/assets/Watch.jpeg",
    platform: "번개장터",
    date: "2026-2-1",
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const FilteredItems =
    filter === ""
      ? Mockdata
      : Mockdata.filter((item) => item.category === filter);

  return (
    <div>
      <div className="abPosition">
        <Header setSearch={setSearch} setQuery={setQuery} />
        <Search search={search} setSearch={setSearch} setQuery={setQuery} />
      </div>
      <div className="contentWrapper">
        <Category setFilter={setFilter} />
        <hr />
        <Product_header />
        <Product items={FilteredItems} query={query} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

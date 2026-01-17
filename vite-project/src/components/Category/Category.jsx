import "./Category.css";
import {
  Search,
  LayoutGrid,
  Smartphone,
  Laptop,
  Camera,
  Shirt,
  Armchair,
  Bike,
  Watch,
} from "lucide-react";

function Category({ setFilter }) {
  const onClickFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className="product_category">
      <div className="category">
        <button className="entire" value={""} onClick={onClickFilter}>
          <LayoutGrid />
          전체
        </button>
        <button value={"Digital"} onClick={onClickFilter}>
          <Smartphone />
          디지털/가전
        </button>
        <button value={"Laptop"} onClick={onClickFilter}>
          <Laptop />
          노트북/PC
        </button>
        <button value={"Camera"} onClick={onClickFilter}>
          <Camera />
          카메라
        </button>
        <button value={"Fashion"} onClick={onClickFilter}>
          <Shirt />
          패션/잡화
        </button>
        <button value={"Interior"} onClick={onClickFilter}>
          <Armchair />
          가구/인테리어
        </button>
        <button value={"Sports"} onClick={onClickFilter}>
          <Bike />
          스포트/레저
        </button>
        <button value={"Watch"} onClick={onClickFilter}>
          <Watch />
          시계/쥬얼리
        </button>
      </div>
    </div>
  );
}

export default Category;

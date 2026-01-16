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

function Category() {
  return (
    <div className="product_category">
      <div className="category">
        <button className="entire">
          <LayoutGrid />
          전체
        </button>
        <button>
          <Smartphone />
          디지털/가전
        </button>
        <button>
          <Laptop />
          노트북/PC
        </button>
        <button>
          <Camera />
          카메라
        </button>
        <button>
          <Shirt />
          패션/잡화
        </button>
        <button>
          <Armchair />
          가구/인테리어
        </button>
        <button>
          <Bike />
          스포트/레저
        </button>
        <button>
          <Watch />
          시계/쥬얼리
        </button>
      </div>
    </div>
  );
}

export default Category;

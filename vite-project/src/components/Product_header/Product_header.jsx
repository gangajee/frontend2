import "./Product_header.css";

function Product_header() {
  return (
    <div className="product_header">
      <p className="count_product">
        📈전체 <strong>2,847</strong>개의 상품
      </p>

      <div className="dropdown">
        <button className="dropbtn">정렬 기준 &#9662;</button>

        <ul className="dropdown-content">
          <li>최신순</li>
          <li>낮은가격순</li>
          <li>높은가격순</li>
          <li>인기순</li>
        </ul>
      </div>
    </div>
  );
}

export default Product_header;

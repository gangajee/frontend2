import "./Category.css";

function Category() {
  return (
    <div className="product_category">
      <div className="search">
        <span className="search_icon">⌕</span>
        <input placeholder="여러 플랫폼의 상품을 한 번에 검색해보세요" />
        <button>검색</button>
      </div>
      <div className="category">
        <button className="entire">전체</button>
        <button>디지털/가전</button>
        <button>💻노트북/PC</button>
        <button>📷카메라</button>
        <button>패션/잡화</button>
        <button>가구/인테리어</button>
        <button>🏄‍♂️스포트/레저</button>
        <button>⌚️시계/쥬얼리</button>
      </div>
    </div>
  );
}

export default Category;

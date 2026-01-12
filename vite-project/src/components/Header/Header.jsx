import "./Header.css";

function Header() {
  return (
    <div className="main_background">
      <h1 className="title">통합 마켓</h1>
      <div className="main_button">
        <button className="home">홈</button>
        <button className="popular">인기매물</button>
        <button className="recent">최근 본 상품</button>
      </div>
    </div>
  );
}

export default Header;

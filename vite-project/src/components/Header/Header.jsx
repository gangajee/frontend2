import "./Header.css";
import { Bell, User } from "lucide-react";

function Header() {
  return (
    <div className="main_background">
      <h1 className="title">통합 마켓</h1>
      <div className="main_button">
        <button className="home">홈</button>
        <button className="recent">최근 본 상품</button>
        <button className="newProduct">상품 등록하기</button>
      </div>
      <div className="header_icon">
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
}

export default Header;

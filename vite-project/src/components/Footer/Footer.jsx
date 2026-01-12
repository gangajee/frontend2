import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="button_setting">
        <button className="more_button">더 많은 상품 보기</button>
      </div>
      <div className="footer_frame">
        <div className="footer_columns">
          <h2>통합마켓</h2>
          <p>
            여러 중고거래 플랫폼을 한 눈에 <br />
            비교하고 최적의 거래를 찾으세요.
          </p>
        </div>

        <div className="footer_columns">
          <h2>서비스</h2>
          <div className="footer_button">
            <button>이용방법</button>
            <button>가격비교</button>
            <button>안전거래</button>
          </div>
        </div>

        <div className="footer_columns">
          <h2>공지사항</h2>
          <div className="footer_button">
            <button>공지사항</button>
            <button className="FAQ">FAQ</button>
            <button>문의하기</button>
          </div>
        </div>

        <div className="footer_columns">
          <h2>연동 플랫폼</h2>
          <div className="footer_button">
            <a href="https://m.bunjang.co.kr/">
              <button>번개장터</button>
            </a>

            <a href="https://web.joongna.com/">
              <button>중고나라</button>
            </a>

            <a href="https://www.daangn.com/kr/">
              <button>당근마켓</button>
            </a>
          </div>
        </div>

        <div className="footer_bottom">
          <hr />
          <p>&copy; 2026 통합마켓. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

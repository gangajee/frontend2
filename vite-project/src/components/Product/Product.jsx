import "./Product.css";

function Product({ items }) {
  return (
    <div className="product">
      {items.map((item) => (
        <div key={item.id} className="product_card">
          <button>
            <img src={item.thumnail} className="product_img" />
            <p className="platform">{item.platform}</p>
            <h4 className="productName">{item.name}</h4>
            <p className="price">{item.price.toLocaleString()}원</p>
            <p className="date">{item.date}</p>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product;

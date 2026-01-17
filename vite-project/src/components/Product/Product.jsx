import "./Product.css";

function Product({ items }) {
  return (
    <div className="product">
      {items.map((item) => (
        <div key={item.id} className="product_card">
          <img src={item.thumnail} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Product;

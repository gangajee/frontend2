import "./Product.css";

function Product({ items, query }) {
  const getFilteredData = () => {
    if (query === "") {
      return items;
    }

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );

    if (filtered.length === 0) {
      return items;
    }

    return filtered;
  };

  const filteredData = getFilteredData();

  return (
    <div className="product">
      {filteredData.map((item) => (
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

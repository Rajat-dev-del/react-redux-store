import "./product-component.style.scss";

import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="card m-2" style={{ width: "18rem" }} key={id}>
        <Link to={`/product/${id}`}>
          <div className="card-body">
            <div>
              <img src={image} className="w-100" alt={title} />
            </div>
            <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
            <h5 className="card-title">{id}</h5>
            <h5 className="card-title">{price}</h5>
            <p className="card-text">{category}</p>
          </div>
        </Link>
      </div>
    );
  });

  return <React.Fragment>{renderList}</React.Fragment>;
};
export default ProductComponent;

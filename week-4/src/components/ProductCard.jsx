import React from "react";

function ProductCard({ id, image, name, nameI18n, description }) {
  return (
    <div id={`product${id}`} className="product-card">
      <div className="flex-1">
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </div>
      <div className="product-card-text">
        <div>
          제품명 Product Name {nameI18n} {name}
        </div>
        <div className="product-card-description">
          설명 Description <br /> {description}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

import React from 'react'
import "./productList.css"
import Product from '../components/product/Product';

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Create and inspire with MJ style </h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          quibusdam, voluptate officiis dolores possimus porro mollitia soluta
          at quam dolorem.
        </p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default ProductList
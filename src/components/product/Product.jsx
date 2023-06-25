import React from 'react'
import "./product.css"
import mjweb from "../../img/miheejeongweb.png"


const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>

      </div>
      <a href={mjweb} target= "_blank" rel="noreferrer"> <img className="p-img" src={img} alt="" /></a>
    </div>
  );
}

export default Product
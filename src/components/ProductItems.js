
import React from "react";
import './css/ProductItems.css'

export default function ProductItems({ imgurl, productName, description }) {
    // let {imgurl, productName, description } = this.props;
  return (
    <div>
      <div className="my-3">
        <div className="card" >
          <div className="Image">
          <img src={imgurl} className="card-img-top" alt={productName} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

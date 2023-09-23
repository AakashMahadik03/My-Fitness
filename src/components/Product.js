import React from "react";
import ProductItems from "../components/ProductItems";
import gymEquipmentData from "./data/gymEquipment";
import workoutAccessoriesData from "./data/workoutAccessories";
import supplementsData from "./data/supplements";
import gymMerchandiseData from "./data/gymMerchandise";
import wearableFitnessData from "./data/wearableFitness";
import "./css/Product.css";

export default function Product() {

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#gymEquipment">
          Our Products
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse  navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#gymEquipment">
                Gym Equipment 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#supplements">
                Supplements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#workoutAccessories">
                Workout Accessories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gymMerchandise">
                Gym Merchandise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#wearableFitness">
              Fitness Devices
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div className="container" >
          <div className="gymEquipment" id="gymEquipment">
            <h2>
              <strong>Gym Equipment</strong>
            </h2>
            <div className="row">
              {gymEquipmentData.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <ProductItems
                      productName={element.productName}
                      description={element.description}
                      imgurl={element.imgurl}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="supplements" id="supplements">
            <h2>
              <strong>Supplements</strong>
            </h2>
            <div className="row">
              {supplementsData.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <ProductItems
                      productName={element.productName}
                      description={element.description}
                      imgurl={element.imgurl}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="workoutAccessories" id="workoutAccessories">
            <h2>
              <strong>Workout Accessories</strong>
            </h2>
            <div className="row">
              {workoutAccessoriesData.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <ProductItems
                      productName={element.productName}
                      description={element.description}
                      imgurl={element.imgurl}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="gymMerchandise" id="gymMerchandise">
            <h2>
              <strong>Gym Merchandise</strong>
            </h2>
            <div className="row">
              {gymMerchandiseData.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <ProductItems
                      productName={element.productName}
                      description={element.description}
                      imgurl={element.imgurl}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="wearableFitness" id="wearableFitness">
            <h2>
              <strong>Wearable Fitness Devices</strong>
            </h2>
            <div className="row">
              {wearableFitnessData.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <ProductItems
                      productName={element.productName}
                      description={element.description}
                      imgurl={element.imgurl}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

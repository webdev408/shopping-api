/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const MyStore = ({ addToCart }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.log("Api response is not an array");
        }
      })
      .catch((error) => {
        console.log("Api request failed: ", error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4 text-center">My Apparel Store</h2>
      <div className="row">
        {Array.isArray(data) &&
          data.map((item) => {
            return (
              <div className="col-4" key={item.id}>
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price}</p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(item);
                      }}
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default MyStore;

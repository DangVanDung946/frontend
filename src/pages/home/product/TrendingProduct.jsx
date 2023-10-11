import { useEffect, useState } from "react";
import { GET_ALL_CATEGORIES, GET_BY_SHOW_HOME } from "../../../api/apiService";

function TrendingProduct() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET_BY_SHOW_HOME("products", 2).then((item) => {
      setProducts(item.data);
    });
    GET_ALL_CATEGORIES("categories").then((item) => {
      setCategories(item.data);
    });
  }, []);
  return (
    <div className="product-showcase">
      <h2 className="title">Trending</h2>
      <div className="showcase-wrapper  has-scrollbar">
        <div className="showcase-container">
          {" "}
          {products.map((item, index) => {
            return (
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src={require(`../../../assets/images/products/${item.image_path}`)}
                    alt={item.product_name}
                    width={70}
                    className="showcase-img"
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{item.product_name}</h4>
                  </a>
                  <a href="#" className="showcase-category">
                    {categories.map((catItem, index) => {
                      if (catItem.id === item.category)
                        return catItem.category_name;
                    })}
                  </a>
                  <div className="price-box">
                    {(() => {
                      if (item.discount_price > 0)
                        return (
                          <>
                            <p className="price">${item.discount_price}</p>
                            <del>${item.regular_price}</del>
                          </>
                        );
                      else
                        return (
                          <>
                            <p className="price">${item.regular_price}</p>
                          </>
                        );
                    })()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="showcase-container">
          <div className="showcase">
            <a href="#" className="showcase-img-box">
              <img
                src={require("../../../assets/images/products/sports-6.jpg")}
                alt="air tekking shoes - white"
                className="showcase-img"
                width={70}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">Air Trekking Shoes - white</h4>
              </a>
              <a href="#" className="showcase-category">
                Sports
              </a>
              <div className="price-box">
                <p className="price">$52.00</p>
                <del>$55.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <a href="#" className="showcase-img-box">
              <img
                src={require("../../../assets/images/products/shoe-3.jpg")}
                alt="Boot With Suede Detail"
                className="showcase-img"
                width={70}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">Boot With Suede Detail</h4>
              </a>
              <a href="#" className="showcase-category">
                boots
              </a>
              <div className="price-box">
                <p className="price">$20.00</p>
                <del>$30.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <a href="#" className="showcase-img-box">
              <img
                src={require("../../../assets/images/products/shoe-1.jpg")}
                alt="men's leather formal wear shoes"
                className="showcase-img"
                width={70}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">
                  Men's Leather Formal Wear shoes
                </h4>
              </a>
              <a href="#" className="showcase-category">
                formal
              </a>
              <div className="price-box">
                <p className="price">$56.00</p>
                <del>$78.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <a href="#" className="showcase-img-box">
              <img
                src={require("../../../assets/images/products/shoe-2.jpg")}
                alt="casual men's brown shoes"
                className="showcase-img"
                width={70}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">Casual Men's Brown shoes</h4>
              </a>
              <a href="#" className="showcase-category">
                Casual
              </a>
              <div className="price-box">
                <p className="price">$50.00</p>
                <del>$55.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;

import { useEffect, useState } from "react";
import { GET_ALL_CATEGORIES, GET_BY_SHOW_HOME } from "../../../api/apiService";

function TopRated() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET_BY_SHOW_HOME("products", 3).then((item) => {
      setProducts(item.data);
    });
    GET_ALL_CATEGORIES("categories").then((item) => {
      setCategories(item.data);
    });
  }, []);
  return (
    <div className="product-showcase">
      <h2 className="title">Top Rated</h2>
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
                src={require("../../../assets/images/products/jewellery-2.jpg")}
                alt="platinum zircon classic ring"
                className="showcase-img"
                width={70}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">platinum Zircon Classic Ring</h4>
              </a>
              <a href="#" className="showcase-category">
                jewellery
              </a>
              <div className="price-box">
                <p className="price">$62.00</p>
                <del>$65.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <a href="#" className="showcase-img-box">
              <img
                src={require("../../../assets/images/products/watch-1.jpg")}
                alt="smart watche vital plus"
                className="showcase-img"
                width={70}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">Smart watche Vital Plus</h4>
              </a>
              <a href="#" className="showcase-category">
                Watches
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
                src={require("../../../assets/images/products/shampoo.jpg")}
                alt="shampoo conditioner packs"
                className="showcase-img"
                width={70}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">shampoo conditioner packs</h4>
              </a>
              <a href="#" className="showcase-category">
                cosmetics
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
                src={require("../../../assets/images/products/jewellery-1.jpg")}
                alt="rose gold peacock earrings"
                className="showcase-img"
                width={70}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
              </a>
              <a href="#" className="showcase-category">
                jewellery
              </a>
              <div className="price-box">
                <p className="price">$20.00</p>
                <del>$30.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRated;

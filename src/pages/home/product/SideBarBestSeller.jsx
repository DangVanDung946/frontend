import { useEffect, useState } from "react";
import { GET_ALL_CATEGORIES, GET_BY_SHOW_HOME } from "../../../api/apiService";
function SideBestSeller() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET_BY_SHOW_HOME("products", 4).then((item) => {
      setProducts(item.data);
    });
    GET_ALL_CATEGORIES("categories").then((item) => {
      setCategories(item.data);
    });
  }, []);
  return (
    <div className="product-showcase">
      <h3 className="showcase-heading">best sellers</h3>
      <div className="showcase-wrapper">
        <div className="showcase-container">
          {products.map((item, index) => {
            return (
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src={require(`../../../assets/images/products/${item.image_path}`)}
                    alt={item.product_name}
                    className="showcase-img"
                    width={75}
                    height={75}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                     <h4 className="showcase-title">{item.product_name}</h4>
                  </a>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <del>${item.regular_price}</del>
                    <p className="price">${item.discount_price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBestSeller;

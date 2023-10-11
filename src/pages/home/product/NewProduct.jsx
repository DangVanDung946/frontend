import { useEffect, useState } from "react";
import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS } from "../../../api/apiService";

function NewProduct() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        GET_ALL_PRODUCTS("products").then((item) => {
            setProducts(item.data);
        });
        GET_ALL_CATEGORIES("categories").then((item) => {
            setCategories(item.data);
        });
    }, []);
    return (
        <div className="product-main">
            <h2 className="title">New Products</h2>
            <div className="product-grid">
                {products.map((item, index) => {
                    return (
                        <div className="showcase" key={index}>
                            <div className="showcase-banner">
                                <img
                                    src={require("../../../assets/images/products/" +
                                        item.image_path)}
                                    alt={item.title}
                                    width={300}
                                    className="product-img default"
                                />
                                <img
                                    src={require("../../../assets/images/products/" +
                                        item.image_path)}
                                    alt={item.product_name}
                                    width={300}
                                    className="product-img hover"
                                />
                                <p className="showcase-badge">15%</p>
                                <div className="showcase-actions">
                                    <button className="btn-action">
                                        <ion-icon name="heart-outline" />
                                    </button>
                                    <button className="btn-action">
                                        <ion-icon name="eye-outline" />
                                    </button>
                                    <button className="btn-action">
                                        <ion-icon name="repeat-outline" />
                                    </button>
                                    <button className="btn-action">
                                        <ion-icon name="bag-add-outline" />
                                    </button>
                                </div>
                            </div>
                            <div className="showcase-content">
                                <a href="#" className="showcase-category">
                                    {categories.map((catItem, index) => {
                                        if (catItem.id === item.category)
                                            return catItem.category_name;
                                    })}
                                </a>
                                <a href="#">
                                    <h3 className="showcase-title">
                                        {item.product_name}
                                    </h3>
                                </a>
                                <div className="showcase-rating">
                                    <ion-icon name="star" />
                                    <ion-icon name="star" />
                                    <ion-icon name="star" />
                                    <ion-icon name="star-outline" />
                                    <ion-icon name="star-outline" />
                                </div>
                                <div className="price-box">
                                    <p className="price">
                                        ${item.discount_price}
                                    </p>
                                    <del>${item.regular_price}</del>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default NewProduct;

import { useEffect, useState } from "react";
import { GET_ALL_CATEGORIES, GET_BY_SHOW_HOME } from "../../../api/apiService";

function NewArrivals() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        GET_BY_SHOW_HOME("products", 1).then((item) => {
            setProducts(item.data);
        });
        GET_ALL_CATEGORIES("categories").then((item) => {
            setCategories(item.data);
        });
    }, []);
    return (
        <div className="product-showcase">
            <h2 className="title">New Arrivals</h2>
            <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
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
                                        <h4 className="showcase-title">
                                            {item.product_name}
                                        </h4>
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
                                                        <p className="price">
                                                            $
                                                            {
                                                                item.discount_price
                                                            }
                                                        </p>
                                                        <del>
                                                            $
                                                            {item.regular_price}
                                                        </del>
                                                    </>
                                                );
                                            else
                                                return (
                                                    <>
                                                        <p className="price">
                                                            $
                                                            {item.regular_price}
                                                        </p>
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
                                src={require("../../../assets/images/products/jacket-5.jpg")}
                                alt="men yarn fleece full-zip jacket"
                                className="showcase-img"
                                width={70}
                            />
                        </a>
                        <div className="showcase-content">
                            <a href="#">
                                <h4 className="showcase-title">
                                    MEN Yarn Fleece Full-Zip Jacket
                                </h4>
                            </a>
                            <a href="#" className="showcase-category">
                                Winter wear
                            </a>
                            <div className="price-box">
                                <p className="price">$61.00</p>
                                <del>$11.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <a href="#" className="showcase-img-box">
                            <img
                                src={require("../../../assets/images/products/jacket-1.jpg")}
                                alt="mens winter leathers jackets"
                                className="showcase-img"
                                width={70}
                            />
                        </a>
                        <div className="showcase-content">
                            <a href="#">
                                <h4 className="showcase-title">
                                    Mens Winter Leathers Jackets
                                </h4>
                            </a>
                            <a href="#" className="showcase-category">
                                Winter wear
                            </a>
                            <div className="price-box">
                                <p className="price">$32.00</p>
                                <del>$20.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <a href="#" className="showcase-img-box">
                            <img
                                src={require("../../../assets/images/products/jacket-3.jpg")}
                                alt="mens winter leathers jackets"
                                className="showcase-img"
                                width={70}
                            />
                        </a>
                        <div className="showcase-content">
                            <a href="#">
                                <h4 className="showcase-title">
                                    Mens Winter Leathers Jackets
                                </h4>
                            </a>
                            <a href="#" className="showcase-category">
                                Jackets
                            </a>
                            <div className="price-box">
                                <p className="price">$50.00</p>
                                <del>$25.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <a href="#" className="showcase-img-box">
                            <img
                                src={require("../../../assets/images/products/shorts-1.jpg")}
                                alt="better basics french terry sweatshorts"
                                className="showcase-img"
                                width={70}
                            />
                        </a>
                        <div className="showcase-content">
                            <a href="#">
                                <h4 className="showcase-title">
                                    Better Basics French Terry Sweatshorts
                                </h4>
                            </a>
                            <a href="#" className="showcase-category">
                                Shorts
                            </a>
                            <div className="price-box">
                                <p className="price">$20.00</p>
                                <del>$10.00</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewArrivals;

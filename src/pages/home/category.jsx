import React from "react";

import dress from "../../assets/images/icons/dress.svg";
import winterWear from "../../assets/images/icons/coat.svg";
import glassLens from "../../assets/images/icons/glasses.svg";
import shortJean from "../../assets/images/icons/shorts.svg";
import tShirt from "../../assets/images/icons/tee.svg";
import jacket from "../../assets/images/icons/jacket.svg";
import watch from "../../assets/images/icons/watch.svg";
import hatCaps from "../../assets/images/icons/hat.svg";

const Category = () => {
    return (
        <div class="category">
            <div class="container">
                <div class="category-item-container has-scrollbar">
                    <div class="category-item">
                        <div class="category-img-box">
                            <img src={dress} alt="dress & frock" width="30" />
                        </div>

                        <div class="category-content-box">
                            <div class="category-content-flex">
                                <h3 class="category-item-title">Váy</h3>

                                <p class="category-item-amount">(53)</p>
                            </div>

                            <a href="#" class="category-btn">
                                Xem Thêm
                            </a>
                        </div>
                    </div>

                    <div class="category-item">
                        <div class="category-img-box">
                            <img
                                src={winterWear}
                                alt="winter wear"
                                width="30"
                            />
                        </div>

                        <div class="category-content-box">
                            <div class="category-content-flex">
                                <h3 class="category-item-title">Mùa đông</h3>

                                <p class="category-item-amount">(58)</p>
                            </div>

                            <a href="#" class="category-btn">
                                Xem Thêm
                            </a>
                        </div>
                    </div>

                    <div class="category-item">
                        <div class="category-img-box">
                            <img
                                src={glassLens}
                                alt="glasses & lens"
                                width="30"
                            />
                        </div>

                        <div class="category-content-box">
                            <div class="category-content-flex">
                                <h3 class="category-item-title">
                                    Kính & ống kính
                                </h3>

                                <p class="category-item-amount">(68)</p>
                            </div>

                            <a href="#" class="category-btn">
                                Xem Thêm
                            </a>
                        </div>
                    </div>

                    <div class="category-item">
                        <div class="category-img-box">
                            <img
                                src={shortJean}
                                alt="shorts & jeans"
                                width="30"
                            />
                        </div>

                        <div class="category-content-box">
                            <div class="category-content-flex">
                                <h3 class="category-item-title">
                                    {" "}
                                    Quần shorts & jean{" "}
                                </h3>

                                <p class="category-item-amount">(84)</p>
                            </div>

                            <a href="#" class="category-btn">
                                Xem Thêm
                            </a>
                        </div>
                    </div>

                    <div class="category-item">
                        <div class="category-img-box">
                            <img src={tShirt} alt="t-shirts" width="30" />
                        </div>

                        <div class="category-content-box">
                            <div class="category-content-flex">
                                <h3 class="category-item-title"> Áo thun </h3>

                                <p class="category-item-amount">(35)</p>
                            </div>

                            <a href="#" class="category-btn">
                                Xem Thêm
                            </a>
                        </div>
                    </div>

                    <div class="category-item">
                        <div class="category-img-box">
                            <img src={jacket} alt="jacket" width="30" />
                        </div>

                        <div class="category-content-box">
                            <div class="category-content-flex">
                                <h3 class="category-item-title"> Áo khoát </h3>

                                <p class="category-item-amount">(16)</p>
                            </div>

                            <a href="#" class="category-btn">
                                Xem Thêm
                            </a>
                        </div>
                    </div>

                    <div class="category-item">
                        <div class="category-img-box">
                            <img src={watch} alt="watch" width="30" />
                        </div>

                        <div class="category-content-box">
                            <div class="category-content-flex">
                                <h3 class="category-item-title"> Đồng hồ </h3>

                                <p class="category-item-amount">(27)</p>
                            </div>

                            <a href="#" class="category-btn">
                                Xem Thêm
                            </a>
                        </div>
                    </div>

                    <div class="category-item">
                        <div class="category-img-box">
                            <img src={hatCaps} alt="hat & caps" width="30" />
                        </div>

                        <div class="category-content-box">
                            <div class="category-content-flex">
                                <h3 class="category-item-title"> Mũ </h3>

                                <p class="category-item-amount">(39)</p>
                            </div>

                            <a href="#" class="category-btn">
                                Xem Thêm
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;

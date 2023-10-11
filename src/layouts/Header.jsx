import React, { Component } from "react";
import { link } from "react-router-dom";

import logo from "../assets/images/logo/logo.svg";
import electronicsBanner1 from "../assets/images/electronics-banner-1.jpg";
import electronicsBanner2 from "../assets/images/electronics-banner-2.jpg";
import mensBanner from "../assets/images/mens-banner.jpg";
import womensBanner from "../assets/images/womens-banner.jpg";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <div class="header-top">
                    <div class="container">
                        <ul class="header-social-container">
                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                        </ul>

                        <div class="header-alert-news">
                            <p>
                                <b> Miễn phí ship </b> Trong tuần với đơn hàng
                                từ 55$
                            </p>
                        </div>

                        <div class="header-top-actions">
                            <select name="currency">
                                <option value="usd">USD $</option>
                                <option value="eur">EUR &euro;</option>
                            </select>

                            <select name="language">
                                <option value="en-US">English</option>
                                <option value="es-ES">Espa&ntilde;ol</option>
                                <option value="fr">Fran&ccedil;ais</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="header-main">
                    <div class="container">
                        <a href="#" class="header-logo">
                            <img
                                src={logo}
                                alt="Anon's logo"
                                width="120"
                                height="36"
                            />
                        </a>

                        <div class="header-search-container">
                            <input
                                type="search"
                                name="search"
                                class="search-field"
                                placeholder="Nhập tên sản phẩm bạn muốn tìm..."
                            />

                            <button class="search-btn">
                                <ion-icon name="search-outline"></ion-icon>
                            </button>
                        </div>

                        <div class="header-user-actions">
                            <button class="action-btn">
                                <ion-icon name="person-outline"></ion-icon>
                            </button>

                            <button class="action-btn">
                                <ion-icon name="heart-outline"></ion-icon>
                                <span class="count">0</span>
                            </button>

                            <button class="action-btn">
                                <ion-icon name="bag-handle-outline"></ion-icon>
                                <span class="count">0</span>
                            </button>
                        </div>
                    </div>
                </div>

                <nav class="desktop-navigation-menu">
                    <div class="container">
                        <ul class="desktop-menu-category-list">
                            <li class="menu-category">
                                <a href="#" class="menu-title">
                                    Trang chủ
                                </a>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">
                                    Danh mục sản phẩm
                                </a>

                                <div class="dropdown-panel">
                                    <ul class="dropdown-panel-list">
                                        <li class="menu-title">
                                            <a href="#">Công nghệ</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Máy tính để bàn</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Máy tính xách tay</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Máy ảnh</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Máy tính bảng</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Tai nghe</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                                <img
                                                    src={electronicsBanner1}
                                                    alt="headphone collection"
                                                    width="250"
                                                    height="119"
                                                />
                                            </a>
                                        </li>
                                    </ul>

                                    <ul class="dropdown-panel-list">
                                        <li class="menu-title">
                                            <a href="#">Nam</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Trang trọng</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Thoải mái</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Thể thao</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Áo khoát</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Kính râm</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                                <img
                                                    src={mensBanner}
                                                    alt="men's fashion"
                                                    width="250"
                                                    height="119"
                                                />
                                            </a>
                                        </li>
                                    </ul>

                                    <ul class="dropdown-panel-list">
                                        <li class="menu-title">
                                            <a href="#">Nữ</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Trang trọng</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Thoải mái</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Nước hoa</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Mỹ phẩm</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Túi</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                                <img
                                                    src={womensBanner}
                                                    alt="women's fashion"
                                                    width="250"
                                                    height="119"
                                                />
                                            </a>
                                        </li>
                                    </ul>

                                    <ul class="dropdown-panel-list">
                                        <li class="menu-title">
                                            <a href="#"> Hiện đại </a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Đồng hồ thông minh </a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">TV thông minh </a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Bàn phím thông minh </a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Chuột thông minh </a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Mic thông minh </a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                                <img
                                                    src={electronicsBanner2}
                                                    alt="mouse collection"
                                                    width="250"
                                                    height="119"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">
                                    Thời trang nam
                                </a>

                                <ul class="dropdown-list">
                                    <li class="dropdown-item">
                                        <a href="#">Áo sơ mi</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#"> Quần short & quần Jean</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Giày an toàn</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Ví tiền</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">
                                    Thời trang nữ
                                </a>

                                <ul class="dropdown-list">
                                    <li class="dropdown-item">
                                        <a href="#"> Váy </a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#"> Hoa tai </a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#"> Vòng cổ </a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#"> Đồ trang điểm </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">
                                    {" "}
                                    Trang sức{" "}
                                </a>

                                <ul class="dropdown-list">
                                    <li class="dropdown-item">
                                        <a href="#"> Hoa tai </a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#"> Nhẫn đôi </a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#"> Vòng cổ </a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#"> Vòng tay </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">
                                    {" "}
                                    Nước hoa{" "}
                                </a>

                                <ul class="dropdown-list">
                                    <li class="dropdown-item">
                                        <a href="#"> Lâu phai </a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#"> Khử mùi </a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#"> Hương hoa </a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#"> Máy làm mát không khí </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">
                                    {" "}
                                    Bài viết{" "}
                                </a>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">
                                    {" "}
                                    Ưu đãi hấp dẫn{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class="mobile-bottom-navigation">
                    <button className="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="bag-handle-outline"></ion-icon>

                        <span class="count">0</span>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="home-outline"></ion-icon>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="heart-outline"></ion-icon>

                        <span class="count">0</span>
                    </button>

                    <button class="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="grid-outline"></ion-icon>
                    </button>
                </div>

                <nav
                    class="mobile-navigation-menu  has-scrollbar"
                    data-mobile-menu
                >
                    <div class="menu-top">
                        <h2 class="menu-title"> Danh mục </h2>

                        <button
                            class="menu-close-btn"
                            data-mobile-menu-close-btn
                        >
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul class="mobile-menu-category-list">
                        <li class="menu-category">
                            <a href="#" class="menu-title">
                                {" "}
                                Trang chủ{" "}
                            </a>
                        </li>

                        <li class="menu-category">
                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title"> Nam </p>

                                <div>
                                    <ion-icon
                                        name="add-outline"
                                        class="add-icon"
                                    ></ion-icon>
                                    <ion-icon
                                        name="remove-outline"
                                        class="remove-icon"
                                    ></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>
                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Áo sơ mi{" "}
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Quần short & jean
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Giày an toàn{" "}
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Ví tiền{" "}
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="menu-category">
                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title"> Nữ </p>

                                <div>
                                    <ion-icon
                                        name="add-outline"
                                        class="add-icon"
                                    ></ion-icon>
                                    <ion-icon
                                        name="remove-outline"
                                        class="remove-icon"
                                    ></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>
                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Váy{" "}
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Hoa tai{" "}
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Vòng cổ{" "}
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Đồ trang điểm{" "}
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="menu-category">
                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title"> Trang sức</p>

                                <div>
                                    <ion-icon
                                        name="add-outline"
                                        class="add-icon"
                                    ></ion-icon>
                                    <ion-icon
                                        name="remove-outline"
                                        class="remove-icon"
                                    ></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>
                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Hoa tai
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Nhẫn đôi{" "}
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Vòng cổ{" "}
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Vòng tay{" "}
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="menu-category">
                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Nước hoa</p>

                                <div>
                                    <ion-icon
                                        name="add-outline"
                                        class="add-icon"
                                    ></ion-icon>
                                    <ion-icon
                                        name="remove-outline"
                                        class="remove-icon"
                                    ></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>
                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Lâu phai{" "}
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Khử mùi{" "}
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Hương hoa{" "}
                                    </a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">
                                        {" "}
                                        Máy làm mát không khí{" "}
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="menu-category">
                            <a href="#" class="menu-title">
                                {" "}
                                Bài viết{" "}
                            </a>
                        </li>

                        <li class="menu-category">
                            <a href="#" class="menu-title">
                                {" "}
                                Ưu đãi hấp đẫn{" "}
                            </a>
                        </li>
                    </ul>

                    <div class="menu-bottom">
                        <ul class="menu-category-list">
                            <li class="menu-category">
                                <button
                                    class="accordion-menu"
                                    data-accordion-btn
                                >
                                    <p class="menu-title"> Ngôn ngữ </p>

                                    <ion-icon
                                        name="caret-back-outline"
                                        class="caret-back"
                                    ></ion-icon>
                                </button>

                                <ul
                                    class="submenu-category-list"
                                    data-accordion
                                >
                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">
                                            English
                                        </a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">
                                            Espa&ntilde;ol
                                        </a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">
                                            Fren&ccedil;h
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="menu-category">
                                <button
                                    class="accordion-menu"
                                    data-accordion-btn
                                >
                                    <p class="menu-title"> Đơn vị tiền </p>
                                    <ion-icon
                                        name="caret-back-outline"
                                        class="caret-back"
                                    ></ion-icon>
                                </button>

                                <ul
                                    class="submenu-category-list"
                                    data-accordion
                                >
                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">
                                            USD &
                                        </a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">
                                            EUR &euro;
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <ul class="menu-social-container">
                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;

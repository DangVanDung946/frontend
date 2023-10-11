import React, { Component } from "react";
import { link } from "react-router-dom";

import payMent from "../assets/images/payment.png";

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer>
                <div class="footer-category">
                    <div class="container">
                        <h2 class="footer-category-title">
                            {" "}
                            Danh mục thương hiệu{" "}
                        </h2>

                        <div class="footer-category-box">
                            <h3 class="category-box-title"> Thời trang : </h3>

                            <a href="#" class="footer-category-link">
                                {" "}
                                Áo thun{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Áo sơ mi
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Quần short & jean{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Áo khoát{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Váy{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Nội y{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Hàng dệt kim{" "}
                            </a>
                        </div>

                        <div class="footer-category-box">
                            <h3 class="category-box-title"> Giày dép :</h3>

                            <a href="#" class="footer-category-link">
                                {" "}
                                Thể thao{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Trang trọng{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Giày ống{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Thoải mái{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Giày cao bồi{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Giày an toàn{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Giày đi tiệc{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Hàng loại 1
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Giày dài{" "}
                            </a>
                        </div>

                        <div class="footer-category-box">
                            <h3 class="category-box-title"> Trang sức :</h3>

                            <a href="#" class="footer-category-link">
                                {" "}
                                Vòng cổ{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Nhẫn{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Nhẫn đôi{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Mặt dây chuyền{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Pha lê{" "}
                            </a>
                            <a href="#" class="footer-category-link">
                                {" "}
                                Vòng tay
                            </a>
                            <a href="#" class="footer-category-link">
                                Hoa tai
                            </a>
                        </div>

                        <div class="footer-category-box">
                            <h3 class="category-box-title"> Mỹ phẩm :</h3>

                            <a href="#" class="footer-category-link">
                                Dầu gội
                            </a>
                            <a href="#" class="footer-category-link">
                                Sữa tắm
                            </a>
                            <a href="#" class="footer-category-link">
                                Rử mặt
                            </a>
                            <a href="#" class="footer-category-link">
                                Đồ trang điẻm
                            </a>
                            <a href="#" class="footer-category-link">
                                Son môi
                            </a>
                            <a href="#" class="footer-category-link">
                                Nước hoa
                            </a>
                            <a href="#" class="footer-category-link">
                                Kem chống nắng
                            </a>
                        </div>
                    </div>
                </div>

                <div class="footer-nav">
                    <div class="container">
                        <ul class="footer-nav-list">
                            <li class="footer-nav-item">
                                <h2 class="nav-title"> Sản phẩm phổ biến </h2>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    Thời trang
                                </a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    Điện tử
                                </a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    Mỹ phẩm
                                </a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    Sức khoẻ
                                </a>
                            </li>
                        </ul>

                        <ul class="footer-nav-list">
                            <li class="footer-nav-item">
                                <h2 class="nav-title"> Sản phẩm </h2>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    {" "}
                                    Giảm giá{" "}
                                </a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    Sản phẩm mới
                                </a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    bán chạy
                                </a>
                            </li>
                        </ul>

                        <ul class="footer-nav-list">
                            <li class="footer-nav-item">
                                <h2 class="nav-title">Công ty</h2>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    Về chúng tôi
                                </a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    Điều khoản dịch vụ
                                </a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    {" "}
                                    Thông tin pháp lý{" "}
                                </a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    Thanh toán bảo mật
                                </a>
                            </li>
                        </ul>

                        <ul class="footer-nav-list">
                            <li class="footer-nav-item">
                                <h2 class="nav-title"> Dich vụ</h2>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    {" "}
                                    Giảm giá{" "}
                                </a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    {" "}
                                    Sản phẩm mới
                                </a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">
                                    Bán chạy
                                </a>
                            </li>
                        </ul>

                        <ul class="footer-nav-list">
                            <li class="footer-nav-item">
                                <h2 class="nav-title">Liên hệ </h2>
                            </li>

                            <li class="footer-nav-item flex">
                                <div class="icon-box">
                                    <ion-icon name="location-outline"></ion-icon>
                                </div>

                                <address class="content">
                                    New York(NY), 14812, USA
                                </address>
                            </li>

                            <li class="footer-nav-item flex">
                                <div class="icon-box">
                                    <ion-icon name="call-outline"></ion-icon>
                                </div>

                                <a
                                    href="tel:+607936-8058"
                                    class="footer-nav-link"
                                >
                                    (607) 936-8058
                                </a>
                            </li>

                            <li class="footer-nav-item flex">
                                <div class="icon-box">
                                    <ion-icon name="mail-outline"></ion-icon>
                                </div>

                                <a
                                    href="mailto:example@gmail.com"
                                    class="footer-nav-link"
                                >
                                    example@gmail.com
                                </a>
                            </li>
                        </ul>

                        <ul class="footer-nav-list">
                            <li class="footer-nav-item">
                                <h2 class="nav-title">Follow Us</h2>
                            </li>

                            <li>
                                <ul class="social-link">
                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-facebook"></ion-icon>
                                        </a>
                                    </li>

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-twitter"></ion-icon>
                                        </a>
                                    </li>

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </a>
                                    </li>

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-instagram"></ion-icon>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">
                        <img
                            src={payMent}
                            alt="payment method"
                            class="payment-img"
                        />

                        <p class="copyright">
                            Copyright &copy; <a href="#">Anon</a> all rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;

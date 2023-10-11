import React from "react";

import testimonial from "../../assets/images/testimonial-1.jpg";
import quotes from "../../assets/images/icons/quotes.svg";
import cta from "../../assets/images/cta-banner.jpg";

const Testimonial_Cta_Service = () => (
    <div>
        <div class="container">
            <div class="testimonials-box">
                {/* - TESTIMONIALS */}

                <div class="testimonial">
                    <h2 class="title"> Giấy chứng nhận </h2>

                    <div class="testimonial-card">
                        <img
                            src={testimonial}
                            alt="alan doe"
                            class="testimonial-banner"
                            width="80"
                            height="80"
                        />

                        <p class="testimonial-name">Alan Doe</p>

                        <p class="testimonial-title">CEO & Founder Invision</p>

                        <img
                            src={quotes}
                            alt="quotation"
                            class="quotation-img"
                            width="26"
                        />

                        <p class="testimonial-desc">
                            Lorem ipsum dolor sit amet consectetur Lorem ipsum
                            dolor dolor sit amet.
                        </p>
                    </div>
                </div>

                {/* - CTA */}

                <div class="cta-container">
                    <img src={cta} alt="summer collection" class="cta-banner" />

                    <a href="#" class="cta-content">
                        <p class="discount">25% Discount</p>

                        <h2 class="cta-title">Summer collection</h2>

                        <p class="cta-text">Starting @ $10</p>

                        <button class="cta-btn">Shop now</button>
                    </a>
                </div>

                {/* SERVICE */}

                <div class="service">
                    <h2 class="title"> Dịch vụ của chúng tôi </h2>

                    <div class="service-container">
                        <a href="#" class="service-item">
                            <div class="service-icon">
                                <ion-icon name="boat-outline"></ion-icon>
                            </div>

                            <div class="service-content">
                                <h3 class="service-title">
                                    {" "}
                                    Giao hàng toàn quốc{" "}
                                </h3>
                                <p class="service-desc">
                                    {" "}
                                    Áp dụng cho đơn hàng từ $100
                                </p>
                            </div>
                        </a>

                        <a href="#" class="service-item">
                            <div class="service-icon">
                                <ion-icon name="rocket-outline"></ion-icon>
                            </div>

                            <div class="service-content">
                                <h3 class="service-title">
                                    {" "}
                                    Giao hàng siêu tốc{" "}
                                </h3>
                                <p class="service-desc">
                                    {" "}
                                    Áp dụng ở TP.HCM & HN{" "}
                                </p>
                            </div>
                        </a>

                        <a href="#" class="service-item">
                            <div class="service-icon">
                                <ion-icon name="call-outline"></ion-icon>
                            </div>

                            <div class="service-content">
                                <h3 class="service-title">
                                    {" "}
                                    Hỗ trợ trực tuyến{" "}
                                </h3>
                                <p class="service-desc"> Từ 8h00 - 23h00 </p>
                            </div>
                        </a>

                        <a href="#" class="service-item">
                            <div class="service-icon">
                                <ion-icon name="arrow-undo-outline"></ion-icon>
                            </div>

                            <div class="service-content">
                                <h3 class="service-title"> Chính sách </h3>
                                <p class="service-desc">
                                    {" "}
                                    Đổi trả dễ dàng và miễn phí{" "}
                                </p>
                            </div>
                        </a>

                        <a href="#" class="service-item">
                            <div class="service-icon">
                                <ion-icon name="ticket-outline"></ion-icon>
                            </div>

                            <div class="service-content">
                                <h3 class="service-title"> Hoàn 30% tiền </h3>
                                <p class="service-desc">
                                    {" "}
                                    Áp dụng cho đơn hàng trên $200
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Testimonial_Cta_Service;

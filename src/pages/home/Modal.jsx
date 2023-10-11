import React from "react";
import img from "../../assets/images/newsletter.png";
const Modal = ({ setIsOpen }) => {
    return (
        <div class="modal">
            <div
                class="modal-close-overlay"
                onClick={() => setIsOpen(false)}
            ></div>

            <div class="modal-content">
                <button
                    onClick={() => setIsOpen(false)}
                    className="modal-close-btn"
                >
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div class="newsletter-img">
                    <img
                        src={img}
                        alt="subscribe newsletter"
                        width="400"
                        height="400"
                    />
                </div>

                <div class="newsletter">
                    <form action="#">
                        <div class="newsletter-header">
                            <h3 class="newsletter-title">
                                Subscribe Newsletter.
                            </h3>

                            <p class="newsletter-desc">
                                Subscribe the <b>Anon</b> to get latest products
                                and discount update.
                            </p>
                        </div>

                        <input
                            type="email"
                            name="email"
                            class="email-field"
                            placeholder="Email Address"
                            required
                        />

                        <button type="submit" class="btn-newsletter">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;

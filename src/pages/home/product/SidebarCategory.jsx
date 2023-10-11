import React, { useState } from "react";

const Accordion = ({ menuTitle, SubTitle, icon }) => {
    const [isActive, setIsActive] = useState(false);
    console.log(SubTitle);
    return (
        <li className="sidebar-menu-category">
            <button
                className="sidebar-accordion-menu"
                onClick={() => setIsActive(!isActive)}
            >
                <div className="menu-title-flex">
                    <img
                        src={icon}
                        alt="clothes"
                        width="20"
                        height="20"
                        className="menu-title-img"
                    />

                    <p className="menu-title"> {menuTitle} </p>
                </div>

                <div>
                    {isActive ? (
                        <ion-icon
                            name="remove-outline"
                            className="remove-icon"
                        ></ion-icon>
                    ) : (
                        <ion-icon
                            name="add-outline"
                            className="add-icon"
                        ></ion-icon>
                    )}
                </div>
            </button>
            {isActive && (
                <ul className="sidebar-submenu-category-list">
                    {SubTitle.map(({ title, current }) => (
                        <li className="sidebar-submenu-category">
                            <a href="#" className="sidebar-submenu-title">
                                <p className="product-name"> {title} </p>
                                <data
                                    value="300"
                                    className="stock"
                                    title="Available Stock"
                                >
                                    {current}
                                </data>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default Accordion;

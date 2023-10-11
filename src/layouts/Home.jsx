import React from "react";
import Slide from "../pages/home/Slider";
import Category from "../pages/home/category";
import Testimonial_Cta_Service from "../pages/home/Testimonial_Cta_Service";
import Blog from "../pages/home/Blog";
import Product from "../pages/home/Product";

function Home(props) {
    return (
        <div>
            <Slide />
            <Category />
            <Product />
            <Testimonial_Cta_Service />
            <Blog />
        </div>
    );
}
export default Home;

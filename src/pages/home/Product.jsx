import ProductFeature from "./product/ProductFeature";
import NewProduct from "./product/NewProduct";
import ProductMinimal from "./product/ProductMinimal";
import SideBarBestSeller from "./product/SideBarBestSeller";
import SideBarCategory from "./product/SidebarCategory";

const Product = () => {
    return (
        <div className="product-container">
            <div className="container">
                {/*
    - SIDEBAR
  */}
                <div className="sidebar has-scrollbar" data-mobile-category="">
                    <SideBarCategory />
                    <SideBarBestSeller />
                </div>
                <div className="product-box">
                    {/*
      - PRODUCT MINIMAL
    */}
                    <ProductMinimal />
                    {/*
      - PRODUCT FEATURED
    */}
                    <ProductFeature />
                    {/*
      - PRODUCT GRID
    */}
                    <NewProduct />
                </div>
            </div>
        </div>
    );
};

export default Product;

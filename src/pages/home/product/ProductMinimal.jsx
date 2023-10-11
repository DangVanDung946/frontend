import NewArrivals from "./NewArrivals";
import TopRated from "./TopRated";
import TrendingProduct from "./TrendingProduct";

function ProductMinimal() {
    return (
        <div className="product-minimal">
            <NewArrivals />
            <TrendingProduct />
            <TopRated />
        </div>
    );
}

export default ProductMinimal;

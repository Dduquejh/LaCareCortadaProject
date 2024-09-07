import { ProductItem } from "../Product/ProductItem";
import { products } from "../../constants";

const Products = () => {
    return(
        <>
            <h1 className="text-4xl font-bold text-white mb-4">Products</h1>
            <ProductItem list={products}/>
        </>
    )
}

export default Products;    
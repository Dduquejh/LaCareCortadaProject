import { ProductItem } from "../Product/ProductItem";
import { products } from "../../constants";

const Products = () => {
  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Products
      </h1>
      <ProductItem list={products} />
    </div>
  );
};

export default Products;

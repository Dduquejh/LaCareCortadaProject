import { useParams } from "react-router-dom";
import { products } from "../../constants";

const ViewProduct = () => {
    const { code } = useParams<{code: string}>();
    if (!code) return "Code not found";

    const product = products.find((product) => product.code === +code);

    if (!product) return "Product not found";
    console.log("Produtcto" + product);
    console.log("Link img: " + product.image);

    return (
        <div>
            <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-1/2"/>
            <p className="text-lg text-white">{product.description}</p>
            <p className="text-lg text-white">${product.price}</p>
        </div>
    )
}

export default ViewProduct;
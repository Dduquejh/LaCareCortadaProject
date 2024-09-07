import { Link } from "react-router-dom";

interface ProductproductProps {
    code: number;
    image: string;
    name: string;
    price: number;
}

export const ProductItem = ({list} : {list: ProductproductProps[]}) => {
    return(
        <>
            {list.map((product) => (
                <div key={product.code} className="bg-gray-100 w-1/4 m-2 p-2">
                    <Link to={`/product/${product.code}`}>
                        <img src={product.image} alt={product.name} className="w-full"/>
                        <h3>{product.name}</h3>
                        <h3>{product.price}</h3>
                    </Link>
                </div>
            ))}
        </>
    )
}
import { Link } from "react-router-dom";

interface ProductProps {
    code: number;
    image: string;
    name: string;
    price: number;
}

export const ProductItem = ({list} : {list: ProductProps[]}) => {
    return(
        <>
            {list.map((product) => (
                <div key={product.code} className="bg-gray-100 w-1/4 m-2 p-2">
                    <Link to={`/Product/${product.code}`}>
                        <img src={product.image} alt={product.name} className="w-full"/>
                        <h3>{product.name}</h3>
                        <h3>{product.price}</h3>
                    </Link>
                </div>
            ))}
        </>
    )
}
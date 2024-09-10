import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

export const ProductItem = ({ list }: { list: ProductProps[] }) => {
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((product) => (
        <div
          key={product.id}
          className="bg-sky-950 sm:w-1/2 md:w-[100%] m-4 p-4 shadow-lg rounded-2xl"
        >
          <Link to={`/Product/${product.id}`}>
            <img src={product.image} alt={product.name} className="w-full" />
            <p className="my-2 font-bold text-2xl text-white text-center">
              {product.name}
            </p>
            <p className="font-semibold text-lg text-white text-center">
              ${product.price}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

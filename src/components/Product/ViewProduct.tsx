import { useParams } from "react-router-dom";
import { products } from "../../constants";
import { CardSlider } from "../CardSlider";

const ViewProduct = () => {
  const { code } = useParams<{ code: string }>();
  if (!code) return "Code not found";

  const product = products.find((product) => product.id === +code);

  if (!product) return "Product not found";

  return (
    <div className="flex justify-center p-2 mx-auto">
      <div className="max-w-4xl w-full p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-white text-4xl text-center mb-8 font-bold">
          {product.name}
        </h1>
        <div className="grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4 mb-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg mx-auto"
          />
          <div className="flex-1 flex flex-col text-center md:text-left">
            <p className="text-white mb-4">{product.description}</p>
            <p className="text-lg text-white">${product.price}</p>
          </div>
        </div>
        <a
          href={`/${product.id}`} // Ajusta esto según la URL deseada
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-sky-950 p-2 rounded-lg flex items-center justify-center w-full hover:bg-sky-800"
        >
          Buy
        </a>
        <div className="flex justify-center mt-8">
          <CardSlider
            list={product.imgs.map((img, index) => ({ image: img, id: index }))}
            showName={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;

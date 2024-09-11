import backgroundImage from '../../images/LaCareCortada.jpeg'; // Ruta correcta de tu imagen
import { CardSlider } from '../CardSlider';
import { models, products } from '../../constants';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Sección de bienvenida con fondo de imagen */}
            <div
                className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <h1
                    className="text-7xl font-bold text-white mb-4 text-center font-old-english"
                    style={{
                        textShadow: `
                            -2px -2px 0 #000, 
                            2px -2px 0 #000, 
                            -2px 2px 0 #000, 
                            2px 2px 0 #000,
                            0 0 5px #000, 
                            0 0 10px #000, 
                            0 0 15px #000
                        `
                    }}
                >
                    Welcome to la care cortada's empire
                </h1>
            </div>

            {/* Sección del resto del contenido con fondo negro */}
            <div className="bg-black min-h-screen py-8">
                <div className="w-full max-w-screen-lg mx-auto">
                    <h2 className="text-3xl font-semibold mb-4 text-center text-white">Models</h2>
                    <CardSlider
                        list={models}
                        showName={true}
                        contentType="model"
                    />
                </div>

                <div className="w-full max-w-screen-lg mx-auto mt-8">
                    <h2 className="text-3xl font-semibold mb-4 text-center text-white">Products</h2>
                    <CardSlider
                        list={products}
                        showName={true}
                        contentType="product"
                    />
                </div>

                <div className="w-full max-w-screen-lg mx-auto mt-8">
                    <h2 className="text-3xl font-semibold mb-4 text-center text-white">Events</h2>
                    <Link to="/Events">
                        <button className="w-full py-2 px-4 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 active:bg-red-800 transition duration-300">
                            See events here ☜(ﾟヮﾟ☜)
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Home;
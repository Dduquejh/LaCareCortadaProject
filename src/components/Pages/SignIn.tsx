
import { Link } from 'react-router-dom';
import userImage from '../../images/Admin.jpeg'; 
import adminImage from '../../images/User.jpeg'; 

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6 text-white">
            <h1 className="text-5xl md:text-6xl font-old-english mb-12 text-center text-red-600">
                Select Your Role
            </h1>
            <div className="flex flex-col md:flex-row gap-12">
                {/* Cuadro para Usuario */}
                <Link
                    to="/user-signup"
                    className="flex flex-col items-center justify-center w-full md:w-1/2 p-12 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                >
                    <img
                        src={userImage}
                        alt="User"
                        className="w-full h-3/4 object-cover mb-6"
                    />
                    <h2 className="text-4xl font-old-english text-center text-white stroke-black stroke-2">
                        User
                    </h2>
                </Link>
                
                {/* Cuadro para Admin */}
                <Link
                    to="/admin-signup"
                    className="flex flex-col items-center justify-center w-full md:w-1/2 p-12 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                >
                    <img
                        src={adminImage}
                        alt="Admin"
                        className="w-full h-3/4 object-cover mb-6"
                    />
                    <h2 className="text-4xl font-old-english text-center text-white stroke-black stroke-2">
                        Admin
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;

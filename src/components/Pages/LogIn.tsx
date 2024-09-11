import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const LogIn = ({ setIsLoggedIn }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 text-white">
            <h1 className="text-6xl font-old-english mb-6 animate-pulse text-center text-red-600">
                WELCOME BACK!
            </h1>
            <form className="w-full max-w-sm space-y-4">
                <div>
                    <label
                        className="block text-[32px] font-old-english mb-2 text-red-600"
                        htmlFor="email"
                    >
                        Email Address
                    </label>
                    <input
                        className="w-full p-3 text-lg border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-black placeholder-gray-500"
                        type="email"
                        id="email"
                        placeholder="yourname@example.com"
                    />
                </div>
                <div>
                    <label
                        className="block text-[32px] font-old-english mb-2 text-red-600"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            className="w-full p-3 text-lg border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-black placeholder-gray-500"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="********"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                            {showPassword ? (
                                <EyeSlashIcon className="w-6 h-6 text-red-600" />
                            ) : (
                                <EyeIcon className="w-6 h-6 text-red-600" />
                            )}
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 text-lg font-bold text-black bg-red-600 rounded-lg hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-red-600"
                    onClick={handleLogin}
                >
                    LOG IN
                </button>
            </form>
            <p className="text-lg mt-6">
                Don't have an account?{' '}
                <a
                    href="/SignIn"
                    className="hover:text-opacity-75 underline font-old-english text-[32px] text-red-600"
                >
                    Sign Up
                </a>
            </p>
        </div>
    );
};

export default LogIn;
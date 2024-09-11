import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const SignInUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(validatePassword(value));
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isPasswordValid) {
      alert("La contraseña no cumple con los requisitos.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 text-white">
      <h1 className="text-6xl font-old-english mb-6 animate-pulse text-center text-red-600">
        SIGN UP AS USER
      </h1>
      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            className="block text-[32px] font-old-english mb-2 text-red-600"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full p-3 text-lg border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-black placeholder-gray-500"
            type="text"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
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
            required
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
              className={`w-full p-3 text-lg border ${
                isPasswordValid
                  ? "border-red-600"
                  : "border-red-600 border-2 border-solid"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-black placeholder-gray-500`}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="********"
              value={password}
              onChange={handlePasswordChange}
              required
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
          {!isPasswordValid && (
            <p className="text-red-600 mt-2">
              La contraseña debe tener al menos 8 caracteres, una letra
              mayúscula y un número.
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-[32px] font-old-english mb-2 text-red-600"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="w-full p-3 text-lg border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-black placeholder-gray-500"
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showConfirmPassword ? (
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
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignInUser;

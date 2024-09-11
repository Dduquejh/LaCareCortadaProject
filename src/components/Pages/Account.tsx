import { useNavigate } from "react-router-dom";

import { FC } from "react";

interface AccountProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const Account: FC<AccountProps> = ({ setIsLoggedIn }) => {
  const userName = "Mister User"; // Sustituye con el nombre real del usuario.
  const navigate = useNavigate();
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black p-6 space-y-8">
      {/* Información del usuario */}
      <h2 className="text-5xl font-old-english text-red-500 text-center">
        Hello, {userName}!
      </h2>

      {/* Botón para hacerse VIP */}
      <a
        href="https://www.oddschecker.com/co/casas-de-apuestas/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 text-black font-bold py-4 px-8 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 text-xl"
      >
        Become a VIP
      </a>

      {/* Botón para cerrar sesión */}
      <button
        className="bg-black border-2 border-red-500 text-red-500 font-bold py-4 px-8 rounded hover:bg-red-500 hover:text-black transition-colors duration-300 text-xl"
        onClick={handleLogin}
      >
        Log Out
      </button>
    </div>
  );
};

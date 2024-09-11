<<<<<<< HEAD
import "./App.css";
import { RouterR } from "./components/Menu/RouterR";

function App() {
  return (
    <>
      <RouterR />
=======
import './App.css'
import { RouterR } from './components/Menu/RouterR'
import { useState } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <RouterR isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
>>>>>>> b4dad3e24ef329bbef3babaae1c120fe6b70e5b0
    </>
  );
}

export default App;

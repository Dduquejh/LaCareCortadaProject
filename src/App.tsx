import './App.css'
import { RouterR } from './components/Menu/RouterR'
import { useState } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <RouterR isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  )
}

export default App

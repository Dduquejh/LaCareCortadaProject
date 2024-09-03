import './App.css'
import { RouterR } from './components/Menu/RouterR'

import { models } from './constants'
import { CardSlider } from './components/CardSlider'
function App() {

  return (
    <>
      <RouterR/>
      <CardSlider list={models}/>
    </>
  )
}

export default App

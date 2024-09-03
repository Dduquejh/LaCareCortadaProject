import './App.css'
import { models } from './constants'
import { CardSlider } from './components/CardSlider'
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-700">
        Hello world!
      </h1>

      <CardSlider list={models}/>

    </>
  )
}

export default App

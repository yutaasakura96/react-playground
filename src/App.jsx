import './App.css'
import Greetings from './components/Greetings'
import Welcome from './components/Welcome'
import { FirstComponent as FC, SecondComponent as SC} from './components/MyComponent'
import MC from './components/MyComponent'

function App() {

  return (
    <div className="App">
      <Welcome name="John Doe"/>
      <Welcome name="Mike Taylor"/>
      <Greetings name="Alice Red"/>
      <FC />
      <SC />
      <MC />
    </div>
  )
}

export default App

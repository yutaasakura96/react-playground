import './App.css'
import Student from './components/Student'
import User from './components/User'

// import Greetings from './components/Greetings'
// import Welcome from './components/Welcome'
// import { FirstComponent as FC, SecondComponent as SC} from './components/MyComponent'
// import MC from './components/MyComponent'

function App() {

  const student = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@mail.com',
    skills: ['HTML', 'CSS', 'JS', 'React']
  }

  return (
    <div className="App">
      {/* <Welcome name="John Doe"/>
      <Welcome name="Mike Taylor"/>
      <Greetings name="Alice Red"/>
      <FC />
      <SC />
      <MC /> */}
      <Student
      student = {student}
      />
      <User />
    </div>
  )
}

export default App

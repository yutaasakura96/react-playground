import './App.css'
import Student from './components/Student'

// import Greetings from './components/Greetings'
// import Welcome from './components/Welcome'
// import { FirstComponent as FC, SecondComponent as SC} from './components/MyComponent'
// import MC from './components/MyComponent'

function App() {

  const student = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@mail.com'
  }

  const skills = ['HTML', 'CSS', 'JS', 'React']

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
      data = {skills}
      />
    </div>
  )
}

export default App

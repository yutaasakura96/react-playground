import { useReducer } from 'react';
import './App.css';
import TaskContext from './state-management/context/tasksContext';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import tasksReducer from './state-management/reducers/tasksReducer';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (

    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TaskContext.Provider>
  )
}

export default App;

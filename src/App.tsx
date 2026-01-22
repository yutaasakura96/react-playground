import { useReducer } from 'react';
import './App.css';
import AuthContext from './state-management/context/authContext';
import TaskContext from './state-management/context/tasksContext';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import authReducer from './state-management/reducers/authReducer';
import tasksReducer from './state-management/reducers/tasksReducer';

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, '');
  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthContext.Provider>
  )
}

export default App;

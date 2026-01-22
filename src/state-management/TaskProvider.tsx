import React, { useReducer } from 'react';
import TaskContext from './context/tasksContext';
import tasksReducer from './reducers/tasksReducer';
interface Props {
  children: React.ReactNode;
}
const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider

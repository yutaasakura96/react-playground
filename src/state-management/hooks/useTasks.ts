import { useContext } from 'react';
import TaskContext from '../context/tasksContext';

const useTasks = () => {
  return useContext(TaskContext);
};

export default useTasks;

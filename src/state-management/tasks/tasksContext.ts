import { createContext, type Dispatch } from 'react';
import type { Task, TaskAction } from './TaskProvider';

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;

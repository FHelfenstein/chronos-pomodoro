import { createContext } from 'react';
import { initialTaskState } from './initialTaskState';
import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './taskActions';

const initialContextValue = {
  state: initialTaskState,
  dispatchTask: () => {},
};

type TaskContextProps = {
  state: TaskStateModel;
  dispatchTask: React.Dispatch<TaskActionModel>;
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

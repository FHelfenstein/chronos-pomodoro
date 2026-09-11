import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';
import type { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatchTask] = useReducer(
    taskReducer,
    initialTaskState,
    () => {
      const storageState = localStorage.getItem('state');

      if (storageState === null) return initialTaskState;

      const parseStorageState = JSON.parse(storageState) as TaskStateModel;

      return {
        ...parseStorageState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
      };
    },
  );
  const playBeepRef = useRef<(() => void) | null>(null);

  const worker = TimerWorkerManager.getInstance();

  useEffect(() => {
    worker.onmessage(e => {
      const countDownSeconds = e.data;

      if (countDownSeconds <= 0) {
        if (playBeepRef.current) {
          playBeepRef.current();
          playBeepRef.current = null;
        }

        dispatchTask({
          type: TaskActionTypes.COMPLETED_TASK,
        });
        worker.terminate();
      } else {
        dispatchTask({
          type: TaskActionTypes.COUNT_DOWN,
          payload: { secondsRemaining: countDownSeconds },
        });
      }
    });
  }, [worker]);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));

    if (!state.activeTask) {
      console.log('Worker terminado por falta de activeTask');
      worker.terminate();
    }

    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      console.log('Carregando Audio');
      playBeepRef.current = loadBeep();
    } else {
      console.log('Zerando Audio');
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatchTask }}>
      {children}
    </TaskContext.Provider>
  );
}

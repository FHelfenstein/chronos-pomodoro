import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import type { TaskModel } from '../../models/TaskModel';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';

export function MainForm() {
  const { state, dispatchTask } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;
    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa!');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatchTask({ type: TaskActionTypes.START_TASK, payload: newTask });

    // worker para controlar o timer de cada task , toda vez que eu chamar uma nova task um novo worker é criado
    const worker = TimerWorkerManager.getInstance();

    worker.postMessage('FAVOR'); // Sim, posso fazer um favor
    worker.postMessage('FALA_OI'); // OK: OI!
    worker.postMessage('BLALBLA'); // Não entendi!
    worker.postMessage('FECHAR'); // Tá bom, vou fechar

    worker.onmessage(event => {
      console.log('PRINCIPAL recebeu:', event.data);
      worker.terminate();
    });

    /*
    worker.onmessage = function (event) {
      console.log('PRINCIPAL recebeu:', event.data);
    };
    */
  }

  function handleInterruptTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    dispatchTask({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='input'
          type='text'
          labelText='task'
          placeholder='Digite algo'
          //value={taskName}
          //onChange={(e) => setTaskName(e.target.value)} // input controlado renderiza a cada tecla que está sendo digitada , seria interessante para input por exemplo de cpf que vai mudando a cor da borda , até que o cpf seja válido
          ref={taskNameInput} // input não controlado vai renderizar somente quando submeter o formulário
          disabled={!!state.activeTask} // quando tenho dois operadores de exclamação o primeiro converte null para boleano e o segunda faz a verificação se a tarefa está ativa
        />
      </div>

      <div className='formRow'>
        <Tips nextCycleType={nextCycleType} />
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            icon={<PlayCircleIcon />}
            color='blue'
            type='submit'
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            key='botao_submit'
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            icon={<StopCircleIcon />}
            color='red'
            type='button'
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            key='botao_button'
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}

//export function MainForm({ state, setState }: HomeProps) {
/*  Exemplo aonde passando props atualizamos o estado do objeto em um terceiro nível ,aqui sem uso de contextAPI
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: '23:34',
      };
    });
  }
  */

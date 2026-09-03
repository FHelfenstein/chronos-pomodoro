import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const { setState } = useTaskContext();
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

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '21:35',
      };
    });
  }

  return (
    <form className='form' action=''>
      <button type='button' onClick={handleClick}>
        Alterar Horário
      </button>
      <div className='formRow'>
        <DefaultInput
          id='input'
          type='text'
          labelText='task'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
        {/*<DefaultButton icon={<StopCircleIcon />} color='red' />*/}
      </div>
    </form>
  );
}

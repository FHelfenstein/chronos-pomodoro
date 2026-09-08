import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currencyCycle: number): TaskModel['type'] {
  if (currencyCycle % 8 === 0) return 'longBreakTime'; // se a divisão por 8 retornar 0 , ou seja múltiplos de 8 é descanso longo
  if (currencyCycle % 2 === 0) return 'shortBreakTime'; // se número par
  return 'workTime'; // caso contrário é impar
}

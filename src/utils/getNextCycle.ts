export function getNextCycle(currencyCycle: number) {
  return currencyCycle === 0 || currencyCycle === 8 ? 1 : currencyCycle + 1;
}

/**
 * 
 * 
 0 -> 1
 1 -> 2
 2 -> 3
 ....
 8 -> 1
 */

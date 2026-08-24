import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo App - 01
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum
        dolores eligendi quibusdam aliquam nam culpa incidunt veritatis quos
        veniam! Impedit mollitia earum assumenda, minus rem consequatur ipsam
        explicabo temporibus.
      </p>
    </>
  );
}

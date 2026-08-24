import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import {
  HomeIcon,
  RotateCcwClock,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';

export function App() {
  return (
    <>
      <HomeIcon />
      <RotateCcwClock />
      <SettingsIcon />
      <SunIcon />

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

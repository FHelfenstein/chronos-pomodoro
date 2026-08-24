import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá Mundo App - 01
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

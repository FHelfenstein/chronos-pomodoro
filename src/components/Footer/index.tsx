import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entenda a técnica pomodoro 🍅
      </RouterLink>
      <RouterLink href='/'>
        Chronos Pomodoro - FC2ConSistemas &copy; {new Date().getFullYear()} -
        Feito com coração ❤️{' '}
      </RouterLink>
    </footer>
  );
}

import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda a técnica pomodoro 🍅</a>
      <a href=''>
        Chronos Pomodoro - FC2ConSistemas &copy; {new Date().getFullYear()} -
        Feito com coração ❤️
      </a>
    </footer>
  );
}

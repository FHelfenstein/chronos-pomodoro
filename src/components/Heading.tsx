import styles from './Heading.module.css';

export function Heading() {
  return (
    <h1 className={`${styles.heading} ${styles.cyan}`}>Olá Mundo (App)</h1>
  );
}

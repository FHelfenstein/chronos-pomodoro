import styles from './styles.module.css';

type InputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

/**pegando todas as props desestruturadas do controle input com spread operator exemplo: ...rest  */
export function Input({ id, type, labelText, ...rest }: InputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}

import styles from "./InputField.module.css";

type Props = {
  readonly type: "text" | "number" | "password";
  readonly text: string;
};

function InputField({ type, text }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input type={type} className={styles.input} placeholder=" " />
        <label className={styles.label}>{text}</label>
      </div>
    </div>
  );
}

export default InputField;

import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

type Props = {
  readonly text: string;
  readonly className?: string;
  readonly navigateTo?: string;
};

function Button({ text, className, navigateTo }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <button
      className={`${styles.btn} ${className ?? ""}`}
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  );
}

export default Button;

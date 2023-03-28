import "./button.css";

const Button = ({ customStyle, word }) => {
  return (
    <button className={customStyle ? customStyle : "btn-default-style"}>
      {word}
    </button>
  );
};

export default Button;

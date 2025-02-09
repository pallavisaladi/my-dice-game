import "./button.css";

const Button = ({ text, onClick, className, innerTextClass }) => {
  return (
    <button onClick={onClick} className={className}>
      <span className={innerTextClass}>{text}</span>
    </button>
  );
};

export default Button;

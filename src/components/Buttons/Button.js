import "./button.css";
const Button = (props) => {
  return (
    <div>
      <div className={`round_design-${props.id}`}>{props.id}</div>
      <div className="steps">Step</div>
    </div>
  );
};

export default Button;

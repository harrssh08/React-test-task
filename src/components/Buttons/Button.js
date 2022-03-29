import "./button.css";
const Button = (props) => {
  return (
    <div>
      <div className={`round_design-${props.fill_button}`}>{props.step}</div>
      <div className="steps">Step</div>
    </div>
  );
};

export default Button;

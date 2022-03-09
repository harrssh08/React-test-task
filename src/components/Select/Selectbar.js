import "./selectbar.css";
const Selectbar = (props) => {
  return (
    <>
      <select className="custom-select" onChange={props.getValue}>
        <option value="0" defaultValue>
          ◉ Youtube Channel
        </option>
        <option value="1">◉ Youtube URL</option>
      </select>
    </>
  );
};

export default Selectbar;

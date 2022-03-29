import Selectbar from "../Select/Selectbar";
import AddIcon from "@mui/icons-material/Add";

const Input = (props) => {
  const clickEvent = () => {
    if (props.inp !== "") {
      if (props.option === "1") {
        props.getdata(props.inp);
      } else {
        props.getvideosdata(props.inp);
        return;
      }
    } else {
      alert("Please enter url");
      return;
    }
  };
  return (
    <>
      <div className="inputs">
        <div className="select_option">
          <Selectbar getValue={props.getValue} />
        </div>
        <div className="select_input">
          <input
            className="input_box"
            type="text"
            onChange={(e) => {
              props.setInp(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                clickEvent();
              }
            }}
            value={props.inp}
          />
          <div id="button-add" onClick={clickEvent}>
            <div className="icon-add">
              <AddIcon fontSize="large" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;

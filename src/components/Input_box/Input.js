import Selectbar from "../Select/Selectbar";

const Input = (props) => {
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
              }
            }}
            value={props.inp}
          />
          <span id="bt">
            <img
              src="images/add.svg"
              alt="add"
              onClick={() => {
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
              }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Input;

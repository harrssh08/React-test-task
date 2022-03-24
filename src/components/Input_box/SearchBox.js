import React from "react";
import "./Input.css";

function SearchBox(props) {
  return (
    <>
      <div className="inputs">
        <input
          type="text"
          className="input_box"
          onChange={(e) => {
            props.setInp(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (props.inp !== "") {
                {
                  props.Search();
                }
              } else {
                alert("Please enter search keyword!");
                return;
              }
            }
          }}
          value={props.inp}
        />
        <span id="bt">
          <img
            src="images/search.svg"
            alt="add"
            onClick={() => {
              if (props.inp !== "") {
                props.Search();
              } else {
                alert("Please enter search keyword!");
              }
            }}
          />
        </span>
      </div>
    </>
  );
}

export default SearchBox;

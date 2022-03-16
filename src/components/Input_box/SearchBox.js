import React from "react";
import "./Input.css";

function SearchBox() {
  return (
    <>
      <div className="inputs">
        <input type="text" className="input_box" />
        <span id="bt">
          <img src="images/search.svg" alt="add" />
        </span>
      </div>
    </>
  );
}

export default SearchBox;

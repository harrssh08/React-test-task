import Button from "../Buttons/Button";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-center my-4 container">
        <h4>
          <span className="head_line">
            Tool to Search within Video in 2 simple steps:
          </span>
        </h4>
      </div>
      <div className="d-flex justify-content-center my-4 container">
        <Button id="1" />
        <hr />
        <Button id="2" />
      </div>
      <div className="d-flex justify-content-center my-4 container">
        <p>
          <span className="b1">
            Select the video link or video channel by youtube.
          </span>
        </p>
        <p id="two">
          (You can select upto 10 videos or 1 channel for demo version.)
        </p>
      </div>
    </>
  );
};

export default Header;

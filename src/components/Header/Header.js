import Button from "../Buttons/Button";
import "./Header.css";

const Header = (props) => {
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
        {props.page === "1" ? (
          <>
            <Button id="1" design="1" />
            <hr />
            <Button id="2" design="2" />
          </>
        ) : (
          <>
            <Button id="1" design="2" />
            <hr />
            <Button id="2" design="1" />
          </>
        )}
      </div>
      <div className="d-flex justify-content-center my-4 container">
        {props.page === "1" ? (
          <>
            <p>
              <span className="b1">
                Select the video link or video channel by youtube.
              </span>
            </p>
            <p id="two">
              (You can select upto 10 videos or 1 channel for demo version.)
            </p>
          </>
        ) : (
          <>
            <p>
              <span className="b2">
                Search the text you want to find in the selected videos.
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Header;

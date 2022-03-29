import "./Card.css";
const Card = (props) => {
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  return (
    <>
      <div className="card_main">
        <div className="remove1">
          <img
            src="images/remove.svg"
            alt="remove"
            onClick={props.del}
            style={{ position: "absolute", top: "-17px", right: "0" }}
          />
        </div>
        <img src={props.thumb} alt="thumb" width="100%" />
        <h6 id="heading">{props.title}</h6>
        <p id="channel_title">By: {props.channel}</p>
        <div className="view_dur">
          <p id="video_view">👁️ {kFormatter(props.view)} </p>
          <p id="video_duration">
            🕒 {props.duration.replace("H", ":").replace("M", ":")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

import "./Card.css";
const Card = (props) => {
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  return (
    <>
      <div className="cards-container">
        <div className="ddd">
          <div className="card_main">
            <div className="remove">
              <img src="images/remove.svg" alt="remove" onClick={props.del} />
            </div>
            <img src={props.thumb} alt="thumb" width="100%" />
            <h6 id="heading">{props.title}</h6>
            <p id="s_channel">By: {props.channel}</p>

            <p id="s_view">👁️ {kFormatter(props.view)} </p>
            <p id="s_duration">
              🕒 {props.duration.replace("H", ":").replace("M", ":")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

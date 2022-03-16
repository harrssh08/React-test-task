import "./Card.css";
const ChannelCard = (props) => {
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelCard;

import "./Card.css";
const ChannelCard = (props) => {
  return (
    <>
      <div className="card_main">
        <div className="remove2">
          <img src="images/remove.svg" alt="remove" onClick={props.del} />
        </div>
        <img src={props.thumb} alt="thumb" width="100%" />
        <h6 id="heading">{props.title}</h6>
        <p id="channel_title">By: {props.channel}</p>
      </div>
    </>
  );
};

export default ChannelCard;

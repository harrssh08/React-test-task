import Card from "../Card/Card";
import { Link } from "react-router-dom";
const Display = (props) => {
  return (
    <>
      {props.data.length === 0 ? (
        <div className="container text-center my-5">
          <p>No Data</p>
        </div>
      ) : (
        <>
          {props.data.map((d, index) => {
            return (
              <Card
                key={index}
                title={d.items[0].snippet.title}
                channel={d.items[0].snippet.channelTitle}
                view={d.items[0].statistics.viewCount}
                duration={d.items[0].contentDetails.duration.slice(2, -1)}
                thumb={d.items[0].snippet.thumbnails.medium.url}
                del={() => {
                  props.delData(index);
                }}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default Display;

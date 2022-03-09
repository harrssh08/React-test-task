import Card from "../Card/Card";

const Display = (props) => {
  return (
    <>
      {props.data.length === 0 ? (
        <p>No Data</p>
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

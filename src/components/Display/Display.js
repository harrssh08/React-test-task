import Card from "../Card/Card";
const Display = (props) => {
  return (
    <>
      {props.data.length === 0 ? (
        <div className="container text-center my-5">
          <p>No Videos Data</p>
        </div>
      ) : (
        <>
          {props.data.map((d, index) => {
            return (
              <Card
                key={index}
                title={d[0].data.items[0].snippet.title}
                channel={d[0].data.items[0].snippet.channelTitle}
                view={d[0].data.items[0].statistics.viewCount}
                duration={d[0].data.items[0].contentDetails.duration.slice(
                  2,
                  -1
                )}
                thumb={d[0].data.items[0].snippet.thumbnails.medium.url}
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

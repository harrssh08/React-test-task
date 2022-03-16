import ChannelCard from "../Card/ChannelCard";

const DisplayChannel = (props) => {
  return (
    <>
      {props.data ? (
        props.data.map((d, index) => {
          return (
            <ChannelCard
              key={index}
              title={d.snippet.title}
              channel={d.snippet.channelTitle}
              thumb={d.snippet.thumbnails.medium.url}
              del={() => {
                props.delData(index);
              }}
            />
          );
        })
      ) : (
        <p>No Data</p>
      )}
    </>
  );
};

export default DisplayChannel;

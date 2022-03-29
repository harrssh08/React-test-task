import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import SearchBox from "../Input_box/SearchBox";
import About from "../About/About";
import DisplaySearchResult from "../Display/DisplaySearchResult";

const Secondpage = (props) => {
  const [inp, setInp] = useState("");
  const [finds, setFinds] = useState([]);

  //console.log("Finds", finds);
  const Search = () => {
    if (props.data.length !== 0) {
      setFinds([]);
      const data = props.data;
      data.map((val) => {
        let arr = [];
        const v = val[1].data;
        v.map((d) => {
          if (d.text.includes(inp.toLowerCase())) {
            arr.push(d);
          }
        });
        if (arr.length !== 0) {
          const x = [arr, val[0]];
          setFinds((preVal) => {
            return [...preVal, x];
          });
        }
      });
    } else {
      alert("no data");
    }
  };
  return (
    <div>
      <Logo />
      <Header page="2" />
      <SearchBox setInp={setInp} inp={inp} Search={Search} />

      {finds.length !== 0 ? (
        <>
          <About data={finds} />
          {finds.map((d, ind) => {
            return (
              <DisplaySearchResult
                key={ind}
                image={d[1].data.items[0].snippet.thumbnails.medium.url}
                head={d[1].data.items[0].snippet.title}
                channel={d[1].data.items[0].snippet.channelTitle}
                view={d[1].data.items[0].statistics.viewCount}
                time={d[1].data.items[0].contentDetails.duration.slice(2, -1)}
                caps={d[0]}
                id={d[1].data.items[0].id}
              />
            );
          })}
        </>
      ) : (
        <div className="container text-center my-5">
          <p>No Result match!</p>
        </div>
      )}
    </div>
  );
};

export default Secondpage;

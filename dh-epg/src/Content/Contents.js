import React, { Fragment } from "react";
import InfiniteScroll from "react-bidirectional-infinite-scroll";
import TopNavBar from "../Nav/NavBar";
import BottomNavBar from "../Nav/BottomNav";
import stations from "../data/channels.json";
import data1 from "../data/1.json";
import data2 from "../data/2.json";
import data3 from "../data/3.json";
import data4 from "../data/4.json";
import data5 from "../data/5.json";
import data6 from "../data/6.json";
import "../App.css";

var station = { ...stations };
var shows = { ...data1, ...data2, ...data3, ...data4, ...data5, ...data6 };

class Contents extends React.Component {
  colorAccent = () => {
    Array.prototype.random = function(length) {
      return this[Math.floor(Math.random() * length)];
    };

    var teams = ["yellow", "teal", "wheat", "blueviolet"];
    var chosen_team = teams.random(teams.length);
    return chosen_team;
  };

  handleTimeSplitting(timeString) {
    if (timeString === 0) {
      return "00:00";
    } else {
      if (timeString.toString().length === 3) {
        const string =
          timeString.toString().slice(0, 1) +
          ":" +
          timeString.toString().slice(1, 4);
        return string;
      } else if (timeString.toString().length > 3) {
        const string =
          timeString.toString().slice(0, 2) +
          ":" +
          timeString.toString().slice(2, 5);
        return string;
      } else if (timeString.toString().length === 2) {
        const string =
          timeString.toString().slice(0, 1) +
          ":" +
          timeString.toString().slice(1, 4) +
          "0";
        return string;
      } else if (timeString.toString().length === 1) {
        const string =
          timeString.toString().slice(0, 1) +
          ":" +
          timeString.toString().slice(1, 4) +
          "00";
        return string;
      }
    }
  }

  render() {
    return (
      <Fragment>
        <TopNavBar />

        <Fragment>
          <section className="left-menus">
            <div className="left-items">
              {Object.values(station.result.channels).map((value, key) => (
                <div key={key}>
                  <img
                    src={`https://cdn.hd-plus.de/senderlogos/bright-cropped/${value["groupID"]}.png`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="item-center" id="tiles">
            <InfiniteScroll
              onReachLeft={f => f}
              onReachRight={f => f}
              position={70}
              horizontal
            >
              {station.result.channels.map((channel, key) => (
                <div
                  key={key}
                  className="shows"
                  data-aos="fadeInUp zoomOutDown"
                  data-aos-delay="70"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                  key={channel["groupID"]}
                >
                  {shows.result.map((item, key) => (
                    <Fragment key={key}>
                      {item["channelID"] === channel["groupID"] && (
                        <div
                          key={key}
                          className="grid-items"
                          style={{
                            borderLeft: `2px solid ${this.colorAccent()}`
                          }}
                        >
                          <div className="item">
                            <small>
                              {this.handleTimeSplitting(item["startTime"])}
                            </small>
                            <small></small>
                          </div>
                          <div className="item-name">{item["title"]}</div>
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              ))}
            </InfiniteScroll>
          </section>
        </Fragment>
        <BottomNavBar />
      </Fragment>
    );
  }
}

export default Contents;

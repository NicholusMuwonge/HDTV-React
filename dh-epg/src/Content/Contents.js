import React, { Fragment } from "react";
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
import { isArray } from "util";

var station = { ...stations };
var shows = { ...data1, ...data2, ...data3, ...data4, ...data5, ...data6 };
function m() {
  if (shows && isArray) {
    console.log(shows.result, "spot");
    const t = shows.result;
    // console.log(t, 'splice')
    Object.values(t).forEach(value => {
      console.log(value["channelID"], "sway");
      return value["groupID"];
    });

    Object.values(t).map(value => {
      console.log(value["groupID"], "odd");
      return value["groupID"];
    });
  }
}

m();
const Shows = props => (
  <Fragment>
    <section className="item-center">
      <div className="shows">
        <div className="grid-items">
          <div className="item">
            <small>{props.time}</small>
            <small>{props.resolution}</small>
          </div>
          <div className="item-name">{props.showTitle}</div>
        </div>
      </div>
    </section>
  </Fragment>
);

const Channels = props => (
  <Fragment>
    <section className="left-menus">
      <div className="left-items">
        <div>
          <img src={props.channel} alt="" />
          <h5>HD</h5>
        </div>
      </div>
    </section>
  </Fragment>
);

class Contents extends React.Component {
  constructor(){
    super();
    this.trans = this.trans.bind(this);
  }
  station = { ...stations };
  shows = { ...data1, ...data2, ...data3, ...data4, ...data5, ...data6 };
  trans(){
    Object.values(station.result.channels).map(value => {
      console.log(value["groupID"], "odgdggddgdd");
      return value["groupID"];
    });
  }
  render() {
    return (
      <Fragment>
        <TopNavBar />
        <BottomNavBar />
        <div className="row">
          <section className="left-menus">
            <div className="left-items">
              {Object.values(station.result.channels).map(value => (
                <div>
                  <img
                    src={`https://cdn.hd-plus.de/senderlogos/bright-cropped/${value["groupID"]}.png`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </section>
          
          <section className="item-center">
            
              {
                Object.values(shows.result).map(value => (
                  <div className="shows">{
                    <div className="grid-items">
                  <div className="item">
                    <small>{value.startime}</small>
                    <small>value.resolution</small>
                  </div>
                  <div className="item-name">{value.title}</div>
                  </div>
                  }
                
                </div>))}
            
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Contents;

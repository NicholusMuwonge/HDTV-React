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

class Contents extends React.Component {
  constructor(){
    super();
    this.trans = this.trans.bind(this);
  }
  station = { ...stations };
  shows = { ...data1, ...data2, ...data3, ...data4, ...data5, ...data6 };
  trans(){
    Object.values(station.result.channels).map(value => {
      return value["groupID"];
    });
  }
  render() {
    // const stat = JSON.parse(...stat, station.result.channels);
    station.result.channels.forEach((item) =>{
    console.log(item);
    });
    return (
      <Fragment>
        <TopNavBar />
        <BottomNavBar />
        <Fragment>
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
            {station.result.channels.map(channel=><div className="shows" key={channel['groupID']}>
              {shows.result.map(item=><Fragment>
                {item['channelID'] === channel['groupID'] && <div className='grid-items' key={item['showID']}>
                <div className='item'>
                  <small>19:45</small>
                <small></small>
                </div>
              <div className='item-name'>{item['title']}</div>
              </div>}
              </Fragment>)}
            </div>)}
            
          </section>
        </Fragment>
      </Fragment>
    );
  }
}

export default Contents;

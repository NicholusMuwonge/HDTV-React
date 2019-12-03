import React from "react";
import '../App.css';


const TopNavBar = () => (
  <header>
      <nav className="navbar">
        <ul>
          <li>
            <div className="left-icon">
              <div className="radiusSize"><i className="icofont-navigation-menu"></i></div>
              <div className="radiusSize lessSign"><i className="fa fa-angle-left" aria-hidden="true"></i></div>
            </div>
          </li>
          <li>
            <div className="buttons">
              <button><i className="fa fa-cog" aria-hidden="true"></i>SENDERLISTE</button>
              <button><i className="fa fa-question" aria-hidden="true"></i>HILFE</button>
            </div>
          </li>
          <li>
            <div className="radiusSize">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </li>
        </ul>
      </nav>
    </header>
);



export default TopNavBar;

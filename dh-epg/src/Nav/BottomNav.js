import React from "react";
import '../App.css';

const BottomNavBar = () => (
  <div className="app-footer">
            <nav className="navbar">
            <ul>
                <li>
                <div className="lists">
                    <div className="list">
                     <i className="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div className="list">
                     <i className="icofont-layout"></i>
                    </div>
                </div>
                </li>
                <li>
                <div className="buttons">
                    <button><i className="fa fa-clock-o clockIcon"></i> So 24.07.20 Uhr</button>
                </div>
                </li>
                <li>
                  <div className="footer-action">
                     <div>
                         <small>AB</small>
                         <h3>JEZT</h3>
                     </div>
                     <div>
                            <small>AB</small>
                            <h3>20:15</h3>
                        </div>
                        <div>
                        <small>AB</small>
                        <h3>22:15</h3>
                        </div>
                  </div>
                </li>
            </ul>
            </nav>
          </div>
);

export default BottomNavBar;

import React, { Component } from 'react';


export default class Header extends Component {

    render() {
        return (
            <header className="header">
              <div className="row middle-xs between-xs">
                <div className="col-sm-2">
                  <div className="box">
                    <img src="http://placehold.it/50x50" />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="box searchbox">
                    <input/>
                  </div>
                </div>
                <div className="col-sm-2 text-right">
                  <div className="box">
                    <span>Sign in</span>
                  </div>
                </div>
              </div>
            </header>
            );
    }
}
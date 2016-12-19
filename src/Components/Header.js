import React, { Component } from 'react';
import SearchBox from './SearchBox';


export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    onClick() {
        document.body.classList.add('modal-active');
        this.props.actions.signInClick(true)
    }

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
                  <SearchBox actions={ this.props.actions } />
                </div>
                <div className="col-sm-2 text-right">
                  <div className="box">
                    <span onClick={ this.onClick.bind(this) }>Sign In</span>
                  </div>
                </div>
              </div>
            </header>
            );
    }
}
import React, { Component } from 'react';
import Header from './Header';
import MainFragment from './MainFragment';
import Footer from './Footer';

export default class App extends Component {

    render() {
        return (
            <div>
              <Header/>
              <MainFragment/>
              <Footer/>
            </div>
            );
    }
}
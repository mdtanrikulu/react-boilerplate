import React, { Component } from 'react';

import News from './News'


export default class SearchResult extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {data, actions, status, query} = this.props;
        return (
            <div className="search-content">
              <h1>Search for: { query }</h1>
              <div className="row">
                <div className="col-sm">
                  { data.length > 0 ?
                    <News data={ data } actions={ actions } status={ status } />
                    :
                    <div className="no-result">
                      <h1>:(</h1>
                      <span>We couldn't find anything for <b>{ query }</b>.</span>
                    </div> }
                </div>
              </div>
            </div>
            );
    }
}
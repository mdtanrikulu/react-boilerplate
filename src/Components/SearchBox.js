import React, { Component } from 'react';


export default class SearchBox extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        typed: false
    }

    onChange(event) {
        this.props.actions.setSearch(event.target.value);
        this.setState({
            typed: event.target.value.length > 0 ? true : false
        })
    }

    onClick(event) {
        if (this.refs.search.value.length > 0) {
            this.refs.search.value = ''
            this.props.actions.setSearch('')
            this.setState({
                typed: false
            })
        }
    }

    render() {
        return (
            <div className="box searchbox">
              <form>
                <input onChange={ this.onChange.bind(this) } ref="search" maxLength="30" />
                <a href="javascript:void(0);" className={ this.state.typed ? "search-button typed" : "search-button" }>
                  <div className="icon">
                    <span className="clear" onClick={ this.onClick.bind(this) }>x</span>
                  </div>
                </a>
              </form>
            </div>
            );
    }
}
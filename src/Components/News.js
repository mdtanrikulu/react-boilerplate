import React, { Component } from 'react';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    showNews() {
        this.setState({
            loading: false
        })
    }

    loadContent() {
        if (this.state.loading) {
            return <div>
                     <div className="animated-background facebook">
                       <div className="background-masker header-top"></div>
                       <div className="background-masker header-left"></div>
                       <div className="background-masker header-right"></div>
                       <div className="background-masker header-bottom"></div>
                       <div className="background-masker subheader-left"></div>
                       <div className="background-masker subheader-right"></div>
                       <div className="background-masker subheader-bottom"></div>
                       <div className="background-masker content-top"></div>
                       <div className="background-masker content-first-end"></div>
                       <div className="background-masker content-second-line"></div>
                       <div className="background-masker content-second-end"></div>
                       <div className="background-masker content-third-line"></div>
                       <div className="background-masker content-third-end"></div>
                     </div>
                     <br/>
                     <div className="animated-background facebook">
                       <div className="background-masker header-top"></div>
                       <div className="background-masker header-left"></div>
                       <div className="background-masker header-right"></div>
                       <div className="background-masker header-bottom"></div>
                       <div className="background-masker subheader-left"></div>
                       <div className="background-masker subheader-right"></div>
                       <div className="background-masker subheader-bottom"></div>
                       <div className="background-masker content-top"></div>
                       <div className="background-masker content-first-end"></div>
                       <div className="background-masker content-second-line"></div>
                       <div className="background-masker content-second-end"></div>
                       <div className="background-masker content-third-line"></div>
                       <div className="background-masker content-third-end"></div>
                     </div>
                   </div>
        } else {
            return this.props.data.map(function(item) {
                return <div className="news-content">
                         <h2>Sub-title</h2>
                         <div className="row">
                           <div className="col-sm-3">
                             <img src="http://placehold.it/100x100" />
                           </div>
                           <div className="col-sm-9">
                             <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                           </div>
                         </div>
                       </div>
            })

        }
    }

    render() {
        setTimeout(() => {
            this.showNews()
        }, 3000);
        return (
            <div className="news">
              { this.loadContent() }
            </div>
            );
    }
}
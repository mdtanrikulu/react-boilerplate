import React, { Component } from 'react';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.showNews = this.showNews.bind(this)

        this.stateTimeout = setTimeout(() => {
            this.showNews()
        }, 500)
    }

    state = {
        loading: true
    }

    componentWillUnmount() {
        clearTimeout(this.stateTimeout);
    }

    showNews() {
        this.props.actions.asyncLoad()
        this.setState({
            loading: this.props.status
        })
    }

    loadContent() {
        const {data, status} = this.props
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
            return data.map(function(item) {
                return <div className="news-content" key={ item.id }>
                         <h2>{ item.title }</h2>
                         <div className="row">
                           <div className="col-sm-3">
                             <img src="http://placehold.it/100x100" />
                           </div>
                           <div className="col-sm-9">
                             <span>{ item.content }</span>
                           </div>
                         </div>
                       </div>
            })

        }
    }

    render() {
        return (
            <div className="news">
              { this.loadContent() }
            </div>
            );
    }
}
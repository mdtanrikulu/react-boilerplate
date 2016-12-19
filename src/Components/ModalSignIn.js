import React, { Component } from 'react';


export default class ModalSignIn extends Component {

    constructor(props) {
        super(props);
    }

    onClick() {
        document.body.classList.remove('modal-active');
        this.props.actions.signInClick(false)
        console.info('Modal', 'closed!')
    }


    render() {
        const {signIn} = this.props;
        return (
            <div id="modal-container" className={ signIn ? "sketch" : "sketch out" } onClick={ this.onClick.bind(this) }>
              <div className="modal-background">
                <div className="modal login-box">
                  <h2>Sign In</h2>
                  <p>Hear me roar.</p>
                  <div>
                    <a href="#" className="social-button" id="facebook-connect"> <span>Connect with Facebook</span></a>
                    <a href="#" className="social-button" id="google-connect"> <span>Connect with Google</span></a>
                    <a href="#" className="social-button" id="twitter-connect"> <span>Connect with Twitter</span></a>
                    <a href="#" className="social-button" id="linkedin-connect"> <span>Connect with LinkedIn</span></a>
                  </div>
                  <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                    <rect x="0" y="0" fill="none" width="380" height="562" rx="3" ry="3"></rect>
                  </svg>
                </div>
              </div>
            </div>
            );
    }
}
import React from 'react';
import Slider from './Slider';
import News from './News';

/**
 * A counter button: tap the button to increase the count.
 */
export default class MainFragment extends React.Component {

    render() {
        const data = ['red', 'green', 'blue'];
        const data2 = ['red'];
        return (
            <div className="main-fragment">
              <div className="main-fragment-content">
                <h2>Title</h2>
                <Slider/>
                <div className="row">
                  <div className="col-sm">
                    <News data={ data } />
                  </div>
                  <div className="col-sm">
                    <News data={ data2 } />
                  </div>
                </div>
              </div>
            </div>
            );
    }
}
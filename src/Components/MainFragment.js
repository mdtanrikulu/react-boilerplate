import React from 'react'
import Slider from './Slider'
import News from './News'
import SearchResult from './SearchResult'
import ModalSignIn from './ModalSignIn'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../Actions'


const data = [{
    id: 0,
    title: 'Sub-title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 1,
    title: 'Sub-title',
    content: 'In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. Maleficia! Vel a modern perhsaps morbi. A terrenti contagium. Forsitan illud Apocalypsi, vel malum poenae horrifying fecimus. Indeflexus monstra per plateas currere. Fit de nostra carne undead. Poenitentiam agite pœnitentiam! Vivens mortua sunt apud nos.'
}, {
    id: 2,
    title: 'Sub-title',
    content: 'Leave dead animals as gifts intently sniff hand yet chase imaginary bugs intently sniff hand. Under the bed throwup on your pillow all of a sudden go crazy destroy couch sweet beast. Inspect anything brought into the house stretch stretch. Sweet beast flop over flop over so burrow under covers. Lick butt use lap as chair for stick butt in face hopped up on goofballs hide when guests come over give attitude and all of a sudden go crazy. Mark territory stretch but intently sniff hand use lap as chair and all of a sudden go crazy so cat snacks yet stare at ceiling.'
}]
const data2 = [{
    id: 0,
    title: 'Sub-title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}]

Array.prototype.myFind = function(obj) {
return this.filter(function(item) {
    for (var prop in obj) {
        if (!(prop in item) || !item[prop].toLowerCase().includes(obj[prop].toLowerCase())) {
            return false;
        }
    }
    return true;
});
};

class MainFragment extends React.Component {

    constructor(props) {
        super(props);

    }


    searchFor(d, q) {
        if (q.length > 0)
            return d.myFind({
                content: q
            });

        else
            return d
    }

    render() {
        const {actions, status, search, signIn} = this.props;
        return (
            <div className="main-fragment">
              <div className="main-fragment-content">
                { search.length > 0 &&
                  <SearchResult query={ search } data={ this.searchFor(data, search) } actions={ actions } status={ status } /> }
                { !search &&
                  <div>
                    <h2>Title</h2>
                    <Slider/>
                    <div className="row">
                      <div className="col-sm">
                        <News data={ data } actions={ actions } status={ status } />
                      </div>
                      <div className="col-sm">
                        <News data={ data2 } actions={ actions } status={ status } />
                      </div>
                    </div>
                  </div> }
              </div>
              <ModalSignIn signIn={ signIn } actions={ actions } />
            </div>
            );
    }
}

const mapStateToProps = state => ({
    status: state.asyncLoad.status,
    search: state.setSearch.search,
    signIn: state.clickEvent.signIn
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainFragment)
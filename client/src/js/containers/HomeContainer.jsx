import React from "react";
import {connect} from "react-redux";
import {getCloudtrailLogs} from '../actions/HomeActions';

export class HomeContainer extends React.Component {

    render() {
        return (
            <div>
               I am the Home Container
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
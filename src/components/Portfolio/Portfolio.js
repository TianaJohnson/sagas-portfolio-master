import React, { Component } from 'react';
import Header from './../Header/Header.js';
import { connect } from 'react-redux';
import axios from 'axios';

class Portfolio extends Component {

    componentDidMount = () => {
        this.getPortfolio();
    }

    getPortfolio = () => {
        axios({
            method: 'GET',
            url: '/portfolio'
        }).then((response) => {
            const action = {
                type: 'SET_PROJECTS',
                payload: response.data
            };
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('error in get Portfolio', error);
        })
    }


    render() {
        return (
            <div>
                <Header />
                <p>Portfolio display</p>
                {JSON.stringify(this.props.reduxStore.projects)} 
                
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
});
export default connect(mapReduxStoreToProps)(Portfolio);
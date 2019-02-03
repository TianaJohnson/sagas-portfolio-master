import React, { Component } from 'react';
import Header from './../Header/Header.js';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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
                <Card>
                <Header />
                {/* <p>Portfolio display</p>
                {JSON.stringify(this.props.reduxStore.projects)}  */}
                
                <CardActionArea>
                    <CardMedia
                        img src="/public/images/feedback.png"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography>
                        Feedback form
                    </Typography>

                </CardContent>
                </Card>
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
});
export default connect(mapReduxStoreToProps)(Portfolio);
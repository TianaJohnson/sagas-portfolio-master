import React, { Component } from 'react';
import AdminHeader from './../Header/AdminHeader.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AdminDisplay from './AdminDisplay';

class Portfolio extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                    <AdminHeader />
                        <br/>
                        <Link to='/'>Back to Projects</Link>
                        <Route exact path="/" component={Portfolio} />
                    </div>
                </Router>
                <div>
                <AdminDisplay/>

                </div>
            </div>
        )
    }
}
export default Portfolio;
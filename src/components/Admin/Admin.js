import React, { Component } from 'react';
import AdminHeader from './../Header/AdminHeader.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Portfolio extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                    <AdminHeader />
                    
                        <Link to='/'>Back to Projevts</Link>
                        <Route exact path="/" component={Portfolio} />
                    </div>
                </Router>
                <p>Admin Display</p>
            </div>
        )
    }
}
export default Portfolio;
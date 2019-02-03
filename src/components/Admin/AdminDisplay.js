import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import axios from 'axios';



class AdminDisplay extends Component {

    constructor() {
        super();
        this.state = {
            newProject: {
            name: '', // name
            date: 0, //date
            tag_id: '', // tag
            gth_url: '', //hit hub url
            web_url: '', // website url
            decription: ''
            }
        }
    }

    componentDidMount = () => {
        this.getAdminInfo();
    }

    getAdminInfo = () => {
        axios({
            method: 'GET',
            url: 'portfolio/admin'
        }).then((response) => {
            const action = {
                type: 'SET_TAGS',
                payload: response.data
            };
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('error in get admin', error);
        })
    }

    addNewProject = () => {
        //event.preventDefault(); // dount this is necessary but it makes it so the page doesnt refresh
        this.props.dispatch({
            type: 'SET_PROJECTS',
            payload: this.state.newProject })
            this.setState({
                newProject: {
                    name: '', // name
                    date: 0, //date
                    tag_id: '', // tag
                    gth_url: '', //hit hub url
                    web_url: '', // website url
                    decription: ''
                    }
            });
        }
    



    render() {
        return (
            // material UI display
            <div className="admin-display-div">
                <form onSubmit={this.addNewProject}>
                    <TextField
                        className="input-display"
                        id="outlined-name"
                        style={{ margin: 10 }}
                        label="Name"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        className="input-display"
                        type="date"
                        id="outlined-name"
                        lable="date"
                        style={{ margin: 10 }}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        className="input-display"
                        type="text"
                        id="outlined-name"
                        select
                        lable="select"
                        style={{ margin: 10 }}
                        margin="normal"
                        variant="outlined"
                        value={this.props.reduxStore.tags}
                    />
                </form>
            </div>
        )
    }
}
const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
});
export default connect(mapReduxStoreToProps)(AdminDisplay);
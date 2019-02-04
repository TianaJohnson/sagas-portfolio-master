import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
// import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from 'axios';



class AdminDisplay extends Component {

    constructor() {
        super();
        this.state = {
            newProject: {
                // name: '', // name
                // date: 0, //date
                tag_id: '', // tag
                // gth_url: '', //hit hub url
                // web_url: '', // website url
                // decription: ''
                // }
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
    addTags = () => {
        this.props.dispatch({
            type: 'SET_TAGS',
            payload: this.state.newProject
        })
        this.setState({
            newProject: {
                tag_id: '',
            }
        })
    }

    // addNewProject = () => {
    //     //event.preventDefault(); // dount this is necessary but it makes it so the page doesnt refresh
    //     this.props.dispatch({
    //         type: 'SET_PROJECTS',
    //         payload: this.state.newProject })
    //         this.setState({
    //             newProject: {
    //                 name: '', // name
    //                 date: 0, //date
    //                 gth_url: '', //hit hub url
    //                 web_url: '', // website url
    //                 decription: ''
    //                 }
    //         });
    //     }
    // EVENT HANDLE for tag box
    handleBoxChange = event => {
        console.log('event happended')
        this.setState({
            newProject: {
                ...this.state.newProject,
                tag_id: event.target.value,
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
                        id="outlined-date"
                        lable="date"
                        style={{ margin: 10 }}
                        margin="normal"
                        variant="outlined"

                    />
                    <TextField
                        className="input-display"
                        select
                        margin="normal"
                        variant="outlined"
                        style={{ margin: 10 }}
                    />
                    {/* <select onChange={this.handleBoxChange} value={this.state.newProject}>
                    <option>Select</option>
                    {this.props.reduxState.tags.map((tag, i ) => {
                            return<option key={i} value={tag.id}>{tag.name}</option>
                    })}
                    </select> */}

                    <TextField
                        className="input-display"
                        id="outline-website-input"
                        margin="normal"
                        variant="outlined"
                        style={{ margin: 10 }}
                        label="website"
                    />

                    <TextField
                        className="input-display"
                        id="outlined-textarea"
                        label="Description"
                        multiline
                        rowsMax="4"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        style={{ margin: 10 }}
                    />
                    <Button variant="outlined" color="primary" className="input-display" size="large" style={{ margin: 10 }}>
                    Submit
                    </Button>
                </form>
            </div >
        )
    }
}
const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
});
export default connect(mapReduxStoreToProps)(AdminDisplay);
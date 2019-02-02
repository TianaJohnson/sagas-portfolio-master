import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


class AdminDisplay extends Component {



    render() {
        return (
            // material UI display
            <div className="admin-display-div">
                <form className="admin-display">
                    <TextField
                        className="input-display"
                        id="outlined-name"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                />

                <TextField
                        className="input-display"
                        type="date"
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                />
                </form>
            </div>
        )
    }
}
export default AdminDisplay;
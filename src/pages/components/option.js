import React from 'react';

export default class option extends React.Component {
    render() {
        return (
            <option
                key={this.props.allUsers.userid}
                uid={this.props.allUsers.userid}
                id={this.props.allUsers.leaguename}
                value={this.props.allUsers.leaguename}>

                {this.props.allUsers.leaguename}

            </option>
        )
    }
}
import React from 'react';
import URI from '../../constance/URI';

export default class player extends React.Component {

    deletePlayer() {
        console.log(this.props.players.leaguename);
        fetch(`${URI}/users/${this.props.players.userid}`, {
            method: 'DELETE'
        });
        fetch(`${URI}/accountstatus/${this.props.players.userid}`, {
            method: 'DELETE'
        });
        window.location = '/members';
    }

    render() {
        return (
            <div>
                <div className="flex border">
                    <h4>{this.props.players.leaguename}</h4>
                    <h4>Team: {this.props.players.team}</h4>
                    <p>Primary role: {this.props.players.preferedrole}</p>
                    {this.props.players.secondaryrole && <p>Secondary role: {this.props.players.secondaryrole}</p>}
                    {this.props.userStatus === 'Admin' && <button onClick={() => { this.deletePlayer() }}>Delete</button>}
                </div>
            </div>
        )
    }
}
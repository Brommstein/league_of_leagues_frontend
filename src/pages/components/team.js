import React from 'react';
import Option from './option';
import URI from '../../constance/URI';

export default class team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            update: this.props.update,
            teamabr: this.props.allTeams.teamabr,
            teamname: this.props.allTeams.teamname,
            captainid: this.props.allTeams.captainid,
            captain: this.props.allTeams.captain,
            topid: this.props.allTeams.topid,
            top: this.props.allTeams.top,
            jungleid: this.props.allTeams.jungleid,
            jungle: this.props.allTeams.jungle,
            midid: this.props.allTeams.midid,
            mid: this.props.allTeams.mid,
            adcid: this.props.allTeams.adcid,
            adc: this.props.allTeams.adc,
            supportid: this.props.allTeams.supportid,
            support: this.props.allTeams.support
        }
        this.setTeamabr = this.setTeamabr.bind(this);
        this.setTeamName = this.setTeamName.bind(this);
        this.setCaptain = this.setCaptain.bind(this);
        this.setTop = this.setTop.bind(this);
        this.setJungle = this.setJungle.bind(this);
        this.setMid = this.setMid.bind(this);
        this.setADC = this.setADC.bind(this);
        this.setSupport = this.setSupport.bind(this);
    }

    setTeamabr(e) {
        this.setState({ teamabr: e.target.value });
    }

    setTeamName(e) {
        this.setState({ teamname: e.target.value });
    }

    setCaptain(e) {
        fetch(`${URI}/accountstatus/${this.state.captainid}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: 'User' })
        })
        this.setState({ captain: e.target.value });
        const captain = document.getElementById('captain').value;
        const captainid = document.getElementById(captain).getAttribute('uid');
        this.setState({ captainid: captainid });
        fetch(`${URI}/accountstatus/${this.state.captainid}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: 'Captain' })
        })
    }

    setTop(e) {
        this.setState({ top: e.target.value });
        const top = document.getElementById('top').value;
        const topid = document.getElementById(top).getAttribute('uid');
        this.setState({ topid: topid });
    }

    setJungle(e) {
        this.setState({ jungle: e.target.value });
        const jungle = document.getElementById('jungle').value;
        const jungleid = document.getElementById(jungle).getAttribute('uid');
        this.setState({ jungleid: jungleid });
    }

    setMid(e) {
        this.setState({ mid: e.target.value });
        const mid = document.getElementById('mid').value;
        const midid = document.getElementById(mid).getAttribute('uid');
        this.setState({ midid: midid });
    }

    setADC(e) {
        this.setState({ adc: e.target.value });
        const adc = document.getElementById('adc').value;
        const adcid = document.getElementById(adc).getAttribute('uid');
        this.setState({ adcid: adcid });
    }

    setSupport(e) {
        this.setState({ support: e.target.value });
        const support = document.getElementById('support').value;
        const supportid = document.getElementById(support).getAttribute('uid');
        this.setState({ supportid: supportid });
    }

    deleteTeam() {
        fetch(`${URI}/teams/${this.props.allTeams.teamid}`, {
            method: 'DELETE'
        });
        window.location = '/';
    }

    updateTeam() {
        this.setState({ update: true });
    }

    submitUpdate(e) {
        e.preventDefault();

        const body = {
            teamname: this.state.teamname,
            teamabr: this.state.teamabr,
            captainid: this.state.captainid,
            captain: this.state.captain,
            topid: this.state.topid,
            top: this.state.top,
            jungleid: this.state.jungleid,
            jungle: this.state.jungle,
            midid: this.state.midid,
            mid: this.state.mid,
            adcid: this.state.adcid,
            adc: this.state.adc,
            supportid: this.state.supportid,
            support: this.state.support
        };

        fetch(`${URI}/teams/${this.props.allTeams.teamid}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(res => console.log(res));

        this.setState({ update: false });
    }

    render() {

        return (
            <div className="border">
                {this.state.update === false && <div className="flexBox">
                    <div className="flex">
                        <h2>{this.state.teamabr}</h2>
                        <h3>{this.state.teamname}</h3>
                        <h4>Captain: {this.state.captain}</h4>
                    </div>
                    <div className="flex">
                        <p>Top: {this.state.top}</p>
                        <p>Jungle: {this.state.jungle}</p>
                        <p>Mid: {this.state.mid}</p>
                        <p>ADC: {this.state.adc}</p>
                        <p>Support: {this.state.support}</p>
                    </div>
                    <br></br>
                </div>}
                {this.state.update === true && <div className="flexBox">
                    <div className="flex">
                        <label htmlFor="teamabr" className="TeamAbrLabel">Team Abr: </label>
                        <input type="text" id="teamabr" onChange={this.setTeamabr} value={this.state.teamabr} placeholder={this.state.teamabr}></input>
                        <p></p>
                        <label htmlFor="teamname" className="TeamNameLabel">Team Name: </label>
                        <input type="text" id="teamname" onChange={this.setTeamName} value={this.state.teamname} placeholder={this.state.teamname}></input>
                        <p></p>
                        <label htmlFor="captain" className="CaptainLabel">Captain: </label>
                        <select name="captain" id="captain" onChange={this.setCaptain}>
                            <option key={this.props.allTeams.captain}
                                uid={this.props.allTeams.captainid}
                                id={this.props.allTeams.captain}
                                value={this.props.allTeams.captain}>{this.props.allTeams.captain}</option>
                            {this.props.allUsers.map(allUsers => (
                                <Option key={allUsers.userid} allUsers={allUsers} />
                            ))}
                        </select>
                    </div>
                    <div className="flex">
                        <label htmlFor="top">Top: </label>
                        <select name="top" id="top" onChange={this.setTop}>
                            <option key={this.props.allTeams.top}
                                uid={this.props.allTeams.topid}
                                id={this.props.allTeams.top}
                                value={this.props.allTeams.top}>{this.props.allTeams.top}</option>
                            {this.props.topPlayers.map(topPlayers => (
                                <Option key={topPlayers.userid} allUsers={topPlayers} />
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="jungle">Jungle: </label>
                        <select name="jungle" id="jungle" onChange={this.setJungle}>
                            <option key={this.props.allTeams.jungle}
                                uid={this.props.allTeams.jungleid}
                                id={this.props.allTeams.jungle}
                                value={this.props.allTeams.jungle}>{this.props.allTeams.jungle}</option>
                            {this.props.junglePlayers.map(junglePlayers => (
                                <Option key={junglePlayers.userid} allUsers={junglePlayers} />
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="mid">Mid: </label>
                        <select name="mid" id="mid" onChange={this.setMid}>
                            <option key={this.props.allTeams.mid}
                                uid={this.props.allTeams.midid}
                                id={this.props.allTeams.mid}
                                value={this.props.allTeams.mid}>{this.props.allTeams.mid}</option>
                            {this.props.midPlayers.map(midPlayers => (
                                <Option key={midPlayers.userid} allUsers={midPlayers} />
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="adc">ADC: </label>
                        <select name="adc" id="adc" onChange={this.setADC}>
                            <option key={this.props.allTeams.adc}
                                uid={this.props.allTeams.adcid}
                                id={this.props.allTeams.adc}
                                value={this.props.allTeams.adc}>{this.props.allTeams.adc}</option>
                            {this.props.adcPlayers.map(adcPlayers => (
                                <Option key={adcPlayers.userid} allUsers={adcPlayers} />
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="support">Support: </label>
                        <select name="support" id="support" onChange={this.setSupport}>
                            <option key={this.props.allTeams.support}
                                uid={this.props.allTeams.supportid}
                                id={this.props.allTeams.support}
                                value={this.props.allTeams.support}>{this.props.allTeams.support}</option>
                            {this.props.supportPlayers.map(supportPlayers => (
                                <Option key={supportPlayers.userid} allUsers={supportPlayers} />
                            ))}
                        </select>
                    </div>
                    <br></br>
                </div>}
                {this.state.update === true && <button type="submit" onClick={(e) => { this.submitUpdate(e) }}>Submit</button>}
                {(this.state.update === false && (this.props.userStatus === 'Captain' || this.props.userStatus === 'Admin')) && <button type="button" onClick={() => { this.updateTeam() }}>Update Team</button>}
                {this.props.userStatus === 'Admin' && <button type="button" onClick={() => { this.deleteTeam() }}>Delete Team</button>}
            </div>
        )
    }
}
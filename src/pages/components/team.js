/* eslint-disable eqeqeq */
import React from 'react';
import Option from './option';
import URI from '../../constance/URI';

export default class team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            update: this.props.update,
            change: this.props.change,
            allusers: this.props.allUsers,
            teamabr: this.props.allTeams.teamabr,
            startteamabr: '',
            teamname: this.props.allTeams.teamname,
            startteamname: '',
            captainid: this.props.allTeams.captainid,
            startcaptainid: '',
            captain: this.props.allTeams.captain,
            topid: this.props.allTeams.topid,
            starttopid: '',
            top: this.props.allTeams._top,
            jungleid: this.props.allTeams.jungleid,
            startjungleid: '',
            jungle: this.props.allTeams.jungle,
            midid: this.props.allTeams.midid,
            startmidid: '',
            mid: this.props.allTeams.mid,
            adcid: this.props.allTeams.adcid,
            startadcid: '',
            adc: this.props.allTeams.adc,
            supportid: this.props.allTeams.supportid,
            startsupportid: '',
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

    async setCaptain(e) {
        this.setState({ captain: e.target.value });
        const captain = document.getElementById('captain').value;
        const captainid = document.getElementById(captain).getAttribute('uid');
        await this.setState({
            captainid: captainid
        });
    }

    async setTop(e) {
        this.setState({ top: e.target.value });
        const top = document.getElementById('top').value;
        const topid = document.getElementById(top).getAttribute('uid');
        await this.setState({
            topid: topid
        });
    }

    async setJungle(e) {
        this.setState({ jungle: e.target.value });
        const jungle = document.getElementById('jungle').value;
        const jungleid = document.getElementById(jungle).getAttribute('uid');
        await this.setState({
            jungleid: jungleid
        });
    }

    async setMid(e) {
        this.setState({ mid: e.target.value });
        const mid = document.getElementById('mid').value;
        const midid = document.getElementById(mid).getAttribute('uid');
        await this.setState({
            midid: midid
        });
    }

    async setADC(e) {
        this.setState({ adc: e.target.value });
        const adc = document.getElementById('adc').value;
        const adcid = document.getElementById(adc).getAttribute('uid');
        await this.setState({
            adcid: adcid
        });
    }

    async setSupport(e) {
        this.setState({ support: e.target.value });
        const support = document.getElementById('support').value;
        const supportid = document.getElementById(support).getAttribute('uid');
        await this.setState({
            supportid: supportid
        });
    }

    async deleteTeam() {
        const user = 'User';
        const freelance = 'Freelance';

        await fetch(`${URI}/teams/${this.props.allTeams.teamid}`, {
            method: 'DELETE'
        });
        await fetch(`${URI}/accountstatus/${this.state.captainid}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ _status: user })
        });
        await fetch(`${URI}/users/teamupdate/${this.state.topid}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ team: freelance })
        });
        await fetch(`${URI}/users/teamupdate/${this.state.jungleid}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ team: freelance })
        });
        await fetch(`${URI}/users/teamupdate/${this.state.midid}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ team: freelance })
        });
        await fetch(`${URI}/users/teamupdate/${this.state.adcid}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ team: freelance })
        });
        await fetch(`${URI}/users/teamupdate/${this.state.supportid}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ team: freelance })
        });

        window.location = '/';
    }

    async updateTeam() {
        await this.setState({
            update: true,
            startteamabr: this.state.teamabr,
            startteamname: this.state.teamname,
            startcaptainid: this.state.captainid,
            starttopid: this.state.topid,
            startjungleid: this.state.jungleid,
            startmidid: this.state.midid,
            startadcid: this.state.adcid,
            startsupportid: this.state.supportid,
        });
    }

    submitUpdate(e) {
        e.preventDefault();

        //Team abr change
        if (this.state.startteamabr !== this.state.teamabr) {
            fetch(`${URI}/teams/${this.props.allTeams.teamid}`, {
                method: "PATCH",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ teamabr: this.state.teamabr })
            })
        }

        //Team name change
        if (this.state.startteamname !== this.state.teamname) {
            fetch(`${URI}/teams/${this.props.allTeams.teamid}`, {
                method: "PATCH",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ teamname: this.state.teamname })
            })
        }

        const freelance = 'Freelance';
        const captain = 'Captain';
        const user = 'User';

        //Captain changes
        if (this.state.startcaptainid !== this.state.captainid) {
            fetch(`${URI}/accountstatus/${this.state.startcaptainid}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _status: user })
            });
            fetch(`${URI}/accountstatus/${this.state.captainid}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _status: captain })
            });
            this.setState({ change: true });
        }

        //Top changes
        if (this.state.starttopid !== this.state.topid) {
            fetch(`${URI}/users/teamupdate/${this.state.starttopid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ team: freelance })
            });
            fetch(`${URI}/users/teamupdate/${this.state.topid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ team: this.state.teamabr })
            });
            this.setState({ change: true });
        }

        //Jungle changes
        if (this.state.startjungleid !== this.state.jungleid) {
            fetch(`${URI}/users/teamupdate/${this.state.startjungleid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ team: freelance })
            });
            fetch(`${URI}/users/teamupdate/${this.state.jungleid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ team: this.state.teamabr })
            });
            this.setState({ change: true });
        }

        //Mid changes
        if (this.state.startmidid !== this.state.midid) {
            fetch(`${URI}/users/teamupdate/${this.state.startmidid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ team: freelance })
            });
            fetch(`${URI}/users/teamupdate/${this.state.midid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ team: this.state.teamabr })
            });
            this.setState({ change: true });
        }

        //ADC changes
        if (this.state.startadcid !== this.state.adcid) {
            fetch(`${URI}/users/teamupdate/${this.state.startadcid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ team: freelance })
            });
            fetch(`${URI}/users/teamupdate/${this.state.adcid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ team: this.state.teamabr })
            });
            this.setState({ change: true });
        }

        //Support changes
        if (this.state.startsupportid !== this.state.supportid) {
            fetch(`${URI}/users/teamupdate/${this.state.startsupportid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ team: freelance })
            });
            fetch(`${URI}/users/teamupdate/${this.state.supportid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ team: this.state.teamabr })
            });
            this.setState({ change: true });
        }

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

        //Any changes
        if (this.state.change === true) {
            fetch(`${URI}/teams/${this.props.allTeams.teamid}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
        }

        this.setState({
            update: false,
            change: false
        });
    }

    render() {

        let sunday = 0;
        let monday = 0;
        let tuesday = 0;
        let wednesday = 0;
        let thursday = 0;
        let friday = 0;
        let saturday = 0;

        let team = [];

        for (let i = 0; i < this.state.allusers.length; i++) {
            if (this.state.allusers[i].userid == this.state.topid) {
                team.push(this.state.allusers[i]);
            }
            if (this.state.allusers[i].userid == this.state.jungleid) {
                team.push(this.state.allusers[i]);
            }
            if (this.state.allusers[i].userid == this.state.midid) {
                team.push(this.state.allusers[i]);
            }
            if (this.state.allusers[i].userid == this.state.adcid) {
                team.push(this.state.allusers[i]);
            }
            if (this.state.allusers[i].userid == this.state.supportid) {
                team.push(this.state.allusers[i]);
            }
        }

        for (let i = 0; i < team.length; i++) {
            if (team[i].sunday === true) sunday++;
            if (team[i].monday === true) monday++;
            if (team[i].tuesday === true) tuesday++;
            if (team[i].wednesday === true) wednesday++;
            if (team[i].thursday === true) thursday++;
            if (team[i].friday === true) friday++;
            if (team[i].saturday === true) saturday++;
        }

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
                            <option key={this.state.captain}
                                uid={this.state.captainid}
                                id={this.state.captain}
                                value={this.state.captain}>{this.state.captain}</option>
                            {this.props.allUsers.map(allUsers => (
                                <Option key={allUsers.userid} allUsers={allUsers} />
                            ))}
                        </select>
                    </div>
                    <div className="flex">
                        <label htmlFor="top">Top: </label>
                        <select name="top" id="top" onChange={this.setTop}>
                            <option key={this.state.top}
                                uid={this.state.topid}
                                id={this.state.top}
                                value={this.state.top}>{this.state.top}</option>
                            {this.props.topPlayers.map(topPlayers => (
                                <Option key={topPlayers.userid} allUsers={topPlayers} />
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="jungle">Jungle: </label>
                        <select name="jungle" id="jungle" onChange={this.setJungle}>
                            <option key={this.state.jungle}
                                uid={this.state.jungleid}
                                id={this.state.jungle}
                                value={this.state.jungle}>{this.state.jungle}</option>
                            {this.props.junglePlayers.map(junglePlayers => (
                                <Option key={junglePlayers.userid} allUsers={junglePlayers} />
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="mid">Mid: </label>
                        <select name="mid" id="mid" onChange={this.setMid}>
                            <option key={this.state.mid}
                                uid={this.state.midid}
                                id={this.state.mid}
                                value={this.state.mid}>{this.state.mid}</option>
                            {this.props.midPlayers.map(midPlayers => (
                                <Option key={midPlayers.userid} allUsers={midPlayers} />
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="adc">ADC: </label>
                        <select name="adc" id="adc" onChange={this.setADC}>
                            <option key={this.state.adc}
                                uid={this.state.adcid}
                                id={this.state.adc}
                                value={this.state.adc}>{this.state.adc}</option>
                            {this.props.adcPlayers.map(adcPlayers => (
                                <Option key={adcPlayers.userid} allUsers={adcPlayers} />
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="support">Support: </label>
                        <select name="support" id="support" onChange={this.setSupport}>
                            <option key={this.state.support}
                                uid={this.state.supportid}
                                id={this.state.support}
                                value={this.state.support}>{this.state.support}</option>
                            {this.props.supportPlayers.map(supportPlayers => (
                                <Option key={supportPlayers.userid} allUsers={supportPlayers} />
                            ))}
                        </select>
                    </div>
                    <br></br>
                </div>}
                <h4>Best day(s) to play: {sunday >= 4 && <p>Sunday</p>}{monday >= 4 && <p>Monday</p>}{tuesday >= 4 && <p>Tuesday</p>}
                    {wednesday >= 4 && <p>Wednesday</p>}{thursday >= 4 && <p>Thursday</p>}{friday >= 4 && <p>Friday</p>}{saturday >= 4 && <p>Saturday</p>}</h4>
                {this.state.update === true && <button type="submit" onClick={(e) => { this.submitUpdate(e) }}>Submit</button>}
                {(this.state.update === false && (this.props.userStatus === 'Captain' || this.props.userStatus === 'Admin')) && <button type="button" onClick={() => { this.updateTeam() }}>Update Team</button>}
                {this.state.update === true && <button type="button" onClick={(e) => { this.setState({ update: false }) }}>Cancel</button>}
                {(this.state.update === false && this.props.userStatus === 'Admin') && <button type="button" onClick={() => { this.deleteTeam() }}>Delete Team</button>}
            </div>
        )
    }
}
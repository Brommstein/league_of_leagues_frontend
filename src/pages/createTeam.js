import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Option from './components/option';
import URI from '../constance/URI';

const CreateTeam = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [topPlayers, setTopPlayers] = useState([]);
    const [junglePlayers, setJunglePlayers] = useState([]);
    const [midPlayers, setMidPlayer] = useState([]);
    const [adcPlayers, setAdcPlayer] = useState([]);
    const [supportPlayers, setSupportPlayer] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userStatus, setUserStatus] = useState('');

    const playerListCreation = () => {

        setIsLoading(true);

        if (!isLoaded) {
            fetch(`${URI}/users`)
                .then(usersResponse => usersResponse.json())
                .then(
                    users => {

                        for (let i = 0; i < users.length; i++) {
                            setAllUsers(allUsers => [...allUsers, users[i]]);
                            if (users[i].preferedrole === 'top') { setTopPlayers(topPlayers => [...topPlayers, users[i]]) };
                            if (users[i].preferedrole === 'jungle') { setJunglePlayers(junglePlayers => [...junglePlayers, users[i]]) };
                            if (users[i].preferedrole === 'mid') { setMidPlayer(midPlayers => [...midPlayers, users[i]]) };
                            if (users[i].preferedrole === 'adc') { setAdcPlayer(adcPlayers => [...adcPlayers, users[i]]) };
                            if (users[i].preferedrole === 'support') { setSupportPlayer(supportPlayers => [...supportPlayers, users[i]]) };

                            if (users[i].secondaryrole === 'top') { setTopPlayers(topPlayers => [...topPlayers, users[i]]) };
                            if (users[i].secondaryrole === 'jungle') { setJunglePlayers(junglePlayers => [...junglePlayers, users[i]]) };
                            if (users[i].secondaryrole === 'mid') { setMidPlayer(midPlayers => [...midPlayers, users[i]]) };
                            if (users[i].secondaryrole === 'adc') { setAdcPlayer(adcPlayers => [...adcPlayers, users[i]]) };
                            if (users[i].secondaryrole === 'support') { setSupportPlayer(supportPlayers => [...supportPlayers, users[i]]) };
                        }
                    }
                );

            setIsLoaded(true);

        }

        setIsLoading(false);

    }

    const onSubmit = async (e) => {

        e.preventDefault();

        const teamName = document.getElementById('teamName').value;
        const teamAbr = document.getElementById('teamAbr').value;
        const captain = document.getElementById('captain').value;
        const captainid = document.getElementById(captain).getAttribute('uid');
        const top = document.getElementById('topLaner').value;
        const topid = document.getElementById(top).getAttribute('uid');
        const jungle = document.getElementById('jungler').value;
        const jungleid = document.getElementById(jungle).getAttribute('uid');
        const mid = document.getElementById('midLaner').value;
        const midid = document.getElementById(mid).getAttribute('uid');
        const adc = document.getElementById('adcLaner').value;
        const adcid = document.getElementById(adc).getAttribute('uid');
        const support = document.getElementById('supportLaner').value;
        const supportid = document.getElementById(support).getAttribute('uid');

        try {

            const body = {
                teamname: teamName,
                teamabr: teamAbr,
                captainid: captainid,
                captain: captain,
                topid: topid,
                top: top,
                jungleid: jungleid,
                jungle: jungle,
                midid: midid,
                mid: mid,
                adcid: adcid,
                adc: adc,
                supportid: supportid,
                support: support
            }

            // eslint-disable-next-line no-unused-vars
            const response = await fetch(`${URI}/teams`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const updatebody = {
                status: 'Captain'
            }

            // eslint-disable-next-line no-unused-vars
            const update = await fetch(`${URI}/accountstatus/${captainid}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatebody)
            });

            const teambody = {
                team: teamAbr
            }

            // eslint-disable-next-line no-unused-vars
            const teamTop = await fetch(`${URI}/users/teamupdate/${topid}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(teambody)
            })

            // eslint-disable-next-line no-unused-vars
            const teamJungle = await fetch(`${URI}/users/teamupdate/${jungleid}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(teambody)
            })

            // eslint-disable-next-line no-unused-vars
            const teamMid = await fetch(`${URI}/users/teamupdate/${midid}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(teambody)
            })

            // eslint-disable-next-line no-unused-vars
            const teamADC = await fetch(`${URI}/users/teamupdate/${adcid}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(teambody)
            })

            // eslint-disable-next-line no-unused-vars
            const teamSupport = await fetch(`${URI}/users/teamupdate/${supportid}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(teambody)
            })

            window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    };

    //check auth token if available
    const bootup = async () => {
        if (window.sessionStorage.getItem('x-auth-token')) {
            const x_auth_token = window.sessionStorage.getItem('x-auth-token');
            await fetch(`${URI}/auth/decode`, {
                headers: { "x-auth-token": x_auth_token }
            }).then(res => res.json()).then(response => {
                if (response.status) setUserStatus(response.status)
            });
        }
    };

    useEffect(() => {
        playerListCreation();
        bootup();
    })

    return (
        <div>
            {!userStatus && <h2>Not Authorized</h2>}
            {!userStatus && <Link to="/">Home</Link>}
            {userStatus && <div>
                {isLoading && <div>Page is loading</div>}
                {!isLoading && <div>
                    <h2>Just need to work on design</h2>
                    <form className="border" onSubmit={onSubmit}>
                        <section>
                            <label htmlFor="teamName">What is your team's name?</label>
                            <input type="text" id="teamName"></input>
                            <p></p>
                            <label htmlFor="teamAbr">What is your team's abreviation</label>
                            <input type="text" id="teamAbr"></input>
                            <p></p>
                            <label htmlFor="captain">Who is the team leader? </label>
                            <select name="captain" id="captain">
                                <option key="" userid="" value=""></option>
                                {allUsers.map(allUsers => (
                                    <Option key={allUsers.userid} allUsers={allUsers} />
                                ))}
                            </select>
                            <p></p>
                            <label htmlFor="topLaner">Who is your top laner? </label>
                            <select name="top" id="topLaner">
                                <option value=""></option>
                                {topPlayers.map(topPlayers => (
                                    <Option key={topPlayers.userid} allUsers={topPlayers} />
                                ))}
                            </select>
                            <p></p>
                            <label htmlFor="jungler">Who is your jungler? </label>
                            <select name="jungle" id="jungler">
                                <option value=""></option>
                                {junglePlayers.map(junglePlayers => (
                                    <Option key={junglePlayers.userid} allUsers={junglePlayers} />
                                ))}
                            </select>
                            <p></p>
                            <label htmlFor="midLaner">Who is your mid laner? </label>
                            <select name="mid" id="midLaner">
                                <option value=""></option>
                                {midPlayers.map(midPlayers => (
                                    <Option key={midPlayers.userid} allUsers={midPlayers} />
                                ))}
                            </select>
                            <p></p>
                            <label htmlFor="adcLaner">Who is your adc? </label>
                            <select name="adc" id="adcLaner">
                                <option value=""></option>
                                {adcPlayers.map(adcPlayers => (
                                    <Option key={adcPlayers.userid} allUsers={adcPlayers} />
                                ))}
                            </select>
                            <p></p>
                            <label htmlFor="supportLaner">Who is your support? </label>
                            <select name="support" id="supportLaner">
                                <option value=""></option>
                                {supportPlayers.map(supportPlayers => (
                                    <Option key={supportPlayers.userid} allUsers={supportPlayers} />
                                ))}
                            </select>
                            <p></p>
                            <button type="submit">Submit</button>
                            <Link to="/">Cancel</Link>
                        </section>
                    </form>
                </div>}
            </div>}
        </div>
    )
}

export default CreateTeam;
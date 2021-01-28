import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CreateTeam = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [topPlayers, setTopPlayers] = useState([]);
    const [junglePlayers, setJunglePlayers] = useState([]);
    const [midPlayers, setMidPlayer] = useState([]);
    const [adcPlayers, setAdcPlayer] = useState([]);
    const [supportPlayers, setSupportPlayer] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const playerListCreation = () => {

        setIsLoading(true);

        if (!isLoaded) {
            fetch('http://localhost:5000/users')
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
            const response = await fetch('http://localhost:5000/teams', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.table(response);

            window.location = "/teams";

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        playerListCreation();
    })

    return (
        <div>
            {isLoading && <div>Page is loading</div>}
            {!isLoading && <div>
                <h2>New user cannot see this page</h2>
                <h2>Needs to be worked on!</h2>
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
                                <option key={allUsers.userid} uid={allUsers.userid} id={allUsers.leaguename} value={allUsers.leaguename}>{allUsers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="topLaner">Who is your top laner? </label>
                        <select name="top" id="topLaner">
                            <option value=""></option>
                            {topPlayers.map(topPlayers => (
                                <option key={topPlayers.userid} uid={topPlayers.userid} id={topPlayers.leaguename} value={topPlayers.leaguename}>{topPlayers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="jungler">Who is your jungler? </label>
                        <select name="jungle" id="jungler">
                            <option value=""></option>
                            {junglePlayers.map(junglePlayers => (
                                <option key={junglePlayers.userid} uid={junglePlayers.userid} id={junglePlayers.leaguename} value={junglePlayers.leaguename}>{junglePlayers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="midLaner">Who is your mid laner? </label>
                        <select name="mid" id="midLaner">
                            <option value=""></option>
                            {midPlayers.map(midPlayers => (
                                <option key={midPlayers.userid} uid={midPlayers.userid} id={midPlayers.leaguename} value={midPlayers.leaguename}>{midPlayers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="adcLaner">Who is your adc? </label>
                        <select name="adc" id="adcLaner">
                            <option value=""></option>
                            {adcPlayers.map(adcPlayers => (
                                <option key={adcPlayers.userid} uid={adcPlayers.userid} id={adcPlayers.leaguename} value={adcPlayers.leaguename}>{adcPlayers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="supportLaner">Who is your support? </label>
                        <select name="support" id="supportLaner">
                            <option value=""></option>
                            {supportPlayers.map(supportPlayers => (
                                <option key={supportPlayers.userid} uid={supportPlayers.userid} id={supportPlayers.leaguename} value={supportPlayers.leaguename}>{supportPlayers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <input type="submit"></input>
                        <Link to="/teams">Cancel</Link>
                    </section>
                </form>
            </div>}
        </div>
    )
}

export default CreateTeam;
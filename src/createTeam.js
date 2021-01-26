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
        const captainid = document.getElementById('captain').getAttribute('uid').value;
        const captain = document.getElementById('captain').value;
        console.log(document.getElementById('captain').getAttribute('userid'));
        const topid = document.getElementById('topLaner').getAttribute('key');
        const top = document.getElementById('topLaner').value;
        const jungleid = document.getElementById('jungler').getAttribute('key');
        const jungle = document.getElementById('jungler').value;
        const midid = document.getElementById('midLaner').getAttribute('key');
        const mid = document.getElementById('midLaner').value;
        const adcid = document.getElementById('adcLaner').getAttribute('key');
        const adc = document.getElementById('adcLaner').value;
        const supportid = document.getElementById('supportLaner').getAttribute('key');
        const support = document.getElementById('supportLaner').value;

        console.log('captain id', captainid);

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

            console.table(body);

            //window.location = "/teams";

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
                                <option key={allUsers.userid} uid={allUsers.userid} value={allUsers.leaguename}>{allUsers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="topLaner">Who is your top laner? </label>
                        <select name="top" id="topLaner">
                            <option value=""></option>
                            {topPlayers.map(topPlayers => (
                                <option key={topPlayers.userid} value={topPlayers.leaguename}>{topPlayers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="jungler">Who is your jungler? </label>
                        <select name="jungle" id="jungler">
                            <option value=""></option>
                            {junglePlayers.map(junglePlayers => (
                                <option key={junglePlayers.userid} value={junglePlayers.leaguename}>{junglePlayers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="midLaner">Who is your mid laner? </label>
                        <select name="mid" id="midLaner">
                            <option value=""></option>
                            {midPlayers.map(midPlayers => (
                                <option key={midPlayers.userid} value={midPlayers.leaguename}>{midPlayers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="adcLaner">Who is your adc? </label>
                        <select name="adc" id="adcLaner">
                            <option value=""></option>
                            {adcPlayers.map(adcPlayers => (
                                <option key={adcPlayers.userid} value={adcPlayers.leaguename}>{adcPlayers.leaguename}</option>
                            ))}
                        </select>
                        <p></p>
                        <label htmlFor="supportLaner">Who is your support? </label>
                        <select name="support" id="supportLaner">
                            <option value=""></option>
                            {supportPlayers.map(supportPlayers => (
                                <option key={supportPlayers.userid} value={supportPlayers.leaguename}>{supportPlayers.leaguename}</option>
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
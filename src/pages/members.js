import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Players from './components/player';
import Log from './components/logstat';
import URI from '../constance/URI';

const Members = () => {

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
            {isLoading && <div><h1>Page is loading</h1></div>}
            {!isLoading && <div>
                <nav>
                    <div className="flexBox">
                        <Link to="/" className="navFlex">Back</Link>
                        <p className="navFlex"></p>
                        <p className="navFlex"></p>
                        <Log userStatus={userStatus} />
                    </div>
                </nav>

                <section>
                    <h2>Needs to be worked on! (Design, and modifying team data)</h2>
                    {topPlayers.length > 0 && <h3>Top Laners</h3>}
                    <div className="flexBox">
                        {topPlayers.map(topPlayers => (
                            <Players key={topPlayers.leaguename} players={topPlayers} userStatus={userStatus} />
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    {junglePlayers.length > 0 && <h3>Junglers</h3>}
                    <div className="flexBox">
                        {junglePlayers.map(junglePlayers => (
                            <Players key={junglePlayers.leaguename} players={junglePlayers} userStatus={userStatus} />
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    {midPlayers.length > 0 && <h3>Mid Laners</h3>}
                    <div className="flexBox">
                        {midPlayers.map(midPlayers => (
                            <Players key={midPlayers.leaguename} players={midPlayers} userStatus={userStatus} />
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    {adcPlayers.length > 0 && <h3>ADCs</h3>}
                    <div className="flexBox">
                        {adcPlayers.map(adcPlayers => (
                            <Players key={adcPlayers.leaguename} players={adcPlayers} userStatus={userStatus} />
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    {supportPlayers.length > 0 && <h3>Supports</h3>}
                    <div className="flexBox">
                        {supportPlayers.map(supportPlayers => (
                            <Players key={supportPlayers.leaguename} players={supportPlayers} userStatus={userStatus} />
                        ))}
                    </div>
                </section>

            </div>}
        </div >
    )
}

export default Members;
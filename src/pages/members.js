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
                    <div className="navflexBox">
                        <Link to="/" className="navFlex">Home</Link>
                        {!userStatus && <p className="navFlex"></p>}
                        {!userStatus && <p className="navFlex"></p>}
                        {userStatus && <Link to="/createTeam" className="navFlex">Create a Team</Link>}
                        {userStatus && <Link to="/accountEdit" className="navFlex">Account</Link>}
                        <Log userStatus={userStatus} />
                    </div>
                </nav>

                <section>
                    {topPlayers.length > 0 && <h2>Top Laners</h2>}
                    <div className="flexBox member">
                        {topPlayers.map(topPlayers => (
                            <Players key={topPlayers.leaguename} players={topPlayers} userStatus={userStatus} />
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    {junglePlayers.length > 0 && <h2>Junglers</h2>}
                    <div className="flexBox member">
                        {junglePlayers.map(junglePlayers => (
                            <Players key={junglePlayers.leaguename} players={junglePlayers} userStatus={userStatus} />
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    {midPlayers.length > 0 && <h2>Mid Laners</h2>}
                    <div className="flexBox member">
                        {midPlayers.map(midPlayers => (
                            <Players key={midPlayers.leaguename} players={midPlayers} userStatus={userStatus} />
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    {adcPlayers.length > 0 && <h2>ADCs</h2>}
                    <div className="flexBox member">
                        {adcPlayers.map(adcPlayers => (
                            <Players key={adcPlayers.leaguename} players={adcPlayers} userStatus={userStatus} />
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    {supportPlayers.length > 0 && <h2>Supports</h2>}
                    <div className="flexBox member">
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
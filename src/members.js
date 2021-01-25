import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Members = () => {

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

    useEffect(() => {
        playerListCreation();
    })

    return (
        <div>

            {/*
                <div className="flexBox">
                    <div className="flex border">
                        <h4>Bailey</h4>
                        <p>Team: TNP</p>
                        <p>Top 3 Champs:</p>
                        <p>Darius, Garen, Gnar</p>
                    </div>
                </div>
                */}

            {isLoading && <div>Page is loading</div>}
            {!isLoading && <div>
                <section>
                    <div className="flexBox">
                        <Link to="/teams" className="flex">Back</Link>
                        <p className="flex"></p>
                        <p className="flex"></p>
                        <Link to="/" className="flex">Logout</Link>
                    </div>
                </section>

                <section>
                    <h3>Top Laners</h3>
                    <div className="flexBox">
                        {topPlayers.map(topPlayers => (
                            <div key={topPlayers.userid}>
                                <div className="flex border">
                                    <h4>{topPlayers.leaguename}</h4>
                                    <h4>{topPlayers.userid}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    <h3>Junglers</h3>
                    <div className="flexBox">
                        {junglePlayers.map(junglePlayers => (
                            <div key={junglePlayers.userid}>
                                <div className="flex border">
                                    <h4>{junglePlayers.leaguename}</h4>
                                    <h4>{junglePlayers.userid}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    <h3>Mid Laners</h3>
                    <div className="flexBox">
                        {midPlayers.map(midPlayers => (
                            <div key={midPlayers.userid}>
                                <div className="flex border">
                                    <h4>{midPlayers.leaguename}</h4>
                                    <h4>{midPlayers.userid}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    <h3>ADCs</h3>
                    <div className="flexBox">
                        {adcPlayers.map(adcPlayers => (
                            <div key={adcPlayers.userid}>
                                <div className="flex border">
                                    <h4>{adcPlayers.leaguename}</h4>
                                    <h4>{adcPlayers.userid}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <br />

                <section>
                    <h3>Supports</h3>
                    <div className="flexBox">
                        {supportPlayers.map(supportPlayers => (
                            <div key={supportPlayers.userid}>
                                <div className="flex border">
                                    <h4>{supportPlayers.leaguename}</h4>
                                    <h4>{supportPlayers.userid}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>}
        </div>
    )
}

export default Members;
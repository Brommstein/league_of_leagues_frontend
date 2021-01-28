import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Teams = () => {

    const [allTeams, setAllTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const teamListCreation = () => {

        setIsLoading(true);

        if (!isLoaded) {
            fetch('http://localhost:5000/teams')
                .then(teamsResponse => teamsResponse.json())
                .then(
                    teams => {

                        for (let i = 0; i < teams.length; i++) {
                            setAllTeams(allTeams => [...allTeams, teams[i]]);
                        }
                    }
                );

            setIsLoaded(true);

        }

        setIsLoading(false);
    }

    useEffect(() => {
        teamListCreation();
    })

    return (
        <div>
            {isLoading && <div>Page is loading</div>}
            {!isLoading && <div>
                <section>
                    <div className="flexBox">
                        <Link to="/" className="flex">Home</Link>
                        <Link to="/createTeam" className="flex">Create a Team</Link>
                        <Link to="/members" className="flex">League Members</Link>
                        <Link to="/" className="flex">Logout</Link>
                    </div>
                </section>
                <section>
                    <h2>Current Teams</h2>
                    {allTeams.map(allTeams => (
                        <div className="border">
                            <div key={allTeams.teamid} className="flexBox">
                                <div className="flex">
                                    <h2>{allTeams.teamabr}</h2>
                                    <h3>{allTeams.teamname}</h3>
                                    <h4>Captain: {allTeams.captain}</h4>
                                </div>
                                <div className="flex">
                                    <p>Top: {allTeams.top}</p>
                                    <p>Jungle: {allTeams.jungle}</p>
                                    <p>Mid: {allTeams.mid}</p>
                                    <p>ADC: {allTeams.adc}</p>
                                    <p>Support: {allTeams.support}</p>
                                </div>
                                <br></br>
                            </div>
                            <button type="button">Edit Team</button>
                            <button type="button">Delete Team</button>
                        </div>
                    ))}
                </section>
            </div>}
        </div>
    )
}

export default Teams;
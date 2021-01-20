import React from 'react';
import { Link } from 'react-router-dom';

export default function teams() {
    return (
        <div>
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
                <div className="border">
                    <div className="flexBox">
                        <h2 className="flex">TNP</h2>
                        <div className="flex">
                            <p>Top: Baesil</p>
                            <p>Jungle: JWM</p>
                            <p>Mid: NunyuhBusiness</p>
                            <p>ADC: Brommstein</p>
                            <p>Support: Lucy Lulu</p>
                        </div>
                    </div>
                </div>
                <p></p>
                <div className="border">
                    <div className="flexBox">
                        <h2 className="flex">BSG</h2>
                        <div className="flex">
                            <p>Top: Trooper</p>
                            <p>Jungle: Mercinary Wolf</p>
                            <p>Mid: Reece</p>
                            <p>ADC: Vermillion</p>
                            <p>Support: Aloe</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
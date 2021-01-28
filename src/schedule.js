import React from 'react';
import { Link } from 'react-router-dom';

export default function schedule() {
    return (
        <div>
            <section>
                <div className="flexBox">
                    <Link to="/" className="flex">Back</Link>
                    <p className="flex"></p>
                    <p className="flex"></p>
                    <Link to="/" className="flex">Logout</Link>
                </div>
            </section>
            <section>
                <h2>Only captains and admins can see this page</h2>
                <h2>Needs to be worked on!</h2>
                <h2>Availability</h2>
                <form action="setAvailability" className="border">
                    <p>What day are you looking to play?</p>
                    {/* Will check days for all players available */}
                    <select>
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                    </select>
                    <p></p>
                    <button type="submit">Submit</button>
                    <p></p>
                </form>
            </section>

            {/* Will change this section acording to what I need scheduling wise... Only captains can schedule games and on click of
            the button, will pass to future game database to show on home screen */}

            <section>
                <h2>Official Games Available</h2>
                <div className="border">
                    <div className="flexBox">
                        <div className="flex">
                            <h2>TNP</h2>
                        </div>
                        <h4 className="flex">VS</h4>
                        <div className="flex">
                            <h2>BSG</h2>
                        </div>
                    </div>
                    <h4>Date: Janurary 17, 2021 @ 09:00pm cst</h4>
                    <button>Request Game</button>
                </div>
            </section>
            <section>
                <h2>Scrims Available</h2>
                <div className="border">
                    <div className="flexBox">
                        <div className="flex">
                            <h2>TNP</h2>
                        </div>
                        <h4 className="flex">VS</h4>
                        <div className="flex">
                            <h2>BSG</h2>
                        </div>
                    </div>
                    <h4>Date: Janurary 16, 2021 @ 07:00pm cst</h4>
                    <button>Request Game</button>
                </div>
                <div className="border">
                    <div className="flexBox">
                        <div className="flex">
                            <h2>TNP</h2>
                        </div>
                        <h4 className="flex">VS</h4>
                        <div className="flex">
                            <h2>BSG</h2>
                        </div>
                    </div>
                    <h4>Date: Janurary 21, 2021 @ 04:00pm cst</h4>
                    <button>Request Game</button>
                </div>
                <div className="border">
                    <div className="flexBox">
                        <div className="flex">
                            <h2>TNP</h2>
                        </div>
                        <h4 className="flex">VS</h4>
                        <div className="flex">
                            <h2>BSG</h2>
                        </div>
                    </div>
                    <h4>Date: Janurary 21, 2021 @ 09:00pm cst</h4>
                    <button>Request Game</button>
                </div>
            </section>
            <section>
                <h2>Cancel Games</h2>
                <div className="border">
                    <div className="flexBox">
                        <div className="flex">
                            <h2>TNP</h2>
                        </div>
                        <h4 className="flex">VS</h4>
                        <div className="flex">
                            <h2>BSG</h2>
                        </div>
                    </div>
                    <h4>Date: Janurary 15, 2021 @ 06:00pm cst</h4>
                    <button>Cancel Game</button>
                </div>
            </section>
        </div>
    )
}
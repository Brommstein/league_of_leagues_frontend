import React from 'react';
import { Link } from 'react-router-dom';

export default function accountEdit() {
    return (
        <div>
            <form action="editAccount" className="border">
                <label htmlFor="newPassword">New Password: </label>
                <input></input>
                <p></p>
                <label htmlFor="leagueName">What is your new name on League of Legends? </label>
                <input></input>
                <p></p>
                <label htmlFor="preferedRole">What is your prefered role? </label>
                <select name="preferedRole" id="preferedRole">
                    <option value=""></option>
                    <option value="top">Top</option>
                    <option value="jungle">Jungle</option>
                    <option value="mid">Mid</option>
                    <option value="adc">ADC</option>
                    <option value="support">Support</option>
                </select>
                <p></p>
                <label htmlFor="secondaryRole">What is your secondary role? </label>
                <select name="secondaryRole" id="secondaryRole">
                    <option value=""></option>
                    <option value="top">Top</option>
                    <option value="jungle">Jungle</option>
                    <option value="mid">Mid</option>
                    <option value="adc">ADC</option>
                    <option value="support">Support</option>
                </select>
                <p></p>
                <div>
                    <p>What days are you able to play?</p>
                    <div className="flexBox">
                        <select>
                            <option>Sunday</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                        </select>
                    </div>
                </div>
                <p></p>
                <label htmlFor="championChoice">What champions do you play?</label>
                <p></p>
                <div className="flexBox">
                    <div className="flex">
                        <select>
                            <option>Ahri</option>
                        </select>
                    </div>
                    <div className="flex">
                        <select>
                            <option>Braum</option>
                        </select>
                    </div>
                    <div className="flex">
                        <select>
                            <option>Cassiopia</option>
                        </select>
                    </div>
                </div>
                <p></p>
                <button typeof="submit">Submit</button>
                <Link to="/">Cancel</Link>
            </form>
        </div>
    )
}
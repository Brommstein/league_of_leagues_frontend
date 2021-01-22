import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {

    const [leagueName, setLeagueName] = useState("");

    const onSubmit = async (e) => {

        e.preventDefault();
        const preferedRole = document.getElementById('preferedRole').value;
        const secondaryRole = document.getElementById('secondaryRole').value;
        const boxesChecked = document.querySelectorAll('input[type="checkbox"]:checked');
        const availability = [];

        for (let i = 0; i < boxesChecked.length; i++){
            availability.push(boxesChecked[i].value);
        }

        console.log(boxesChecked);
        console.log(availability);

        try {
            const body = { leaguename: leagueName, preferedrole: preferedRole, secondaryrole: secondaryRole };
            // eslint-disable-next-line no-unused-vars
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            //window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <form className="border" onSubmit={onSubmit}>
                <h2>Create your account</h2>

                {/*
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" required></input>
                <p></p>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" required></input>
                <p></p>
                */}

                <label htmlFor="leagueName">What is your name on League of Legends? </label>
                <input type="text" value={leagueName} onChange={e => setLeagueName(e.target.value)} required></input>
                <p></p>
                <label htmlFor="preferedRole">What is your prefered role? </label>
                <select name="preferedRole" id="preferedRole">
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
                    <p>What day are you able to play?</p>
                    <div className="flexBox" id="availability">
                        <div className="flex">
                            <input type="checkbox" name="sundayBox" value="sunday"></input>
                            <label htmlFor="sundayBox">Sunday</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="mondayBox" value="monday"></input>
                            <label htmlFor="mondayBox">Monday</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="tuesdayBox" value="tuesday"></input>
                            <label htmlFor="tuesdayBox">Tuesday</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="wednesdayBox" value="wednesday"></input>
                            <label htmlFor="wednesdayBox">Wednesday</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="thursdayBox" value="thursday"></input>
                            <label htmlFor="thursdayBox">Thursday</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="fridayBox" value="friday"></input>
                            <label htmlFor="fridayBox">Friday</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="saturdayBox" value="saturday"></input>
                            <label htmlFor="saturdayBox">Saturday</label>
                        </div>
                    </div>
                </div>
                <p></p>
                {/*
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
                */}

                <button type="submit">Submit</button>
                <Link to="/">Cancel</Link>
            </form>
        </div>
    )
}

export default CreateAccount;
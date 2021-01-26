import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//NEED TO CONNECT USER ID TO PAGE FOR PAGE TO WORK VIA USER AUTH

const AccountEdit = () => {

    const [leagueName, setLeagueName] = useState("");

    const onSubmit = async (e) => {

        e.preventDefault();

        const preferedRole = document.getElementById('preferedRole').value;
        const secondaryRole = document.getElementById('secondaryRole').value;
        const boxesChecked = document.querySelectorAll('input[type="checkbox"]:checked');
        const availability = [];
        let sunday = false;
        let monday = false;
        let tuesday = false;
        let wednesday = false;
        let thursday = false;
        let friday = false;
        let saturday = false;

        for (let i = 0; i < boxesChecked.length; i++) {
            availability.push(boxesChecked[i].value);
        }

        for (let i = 0; i < availability.length; i++) {
            if (availability[i] === 'sunday') { sunday = true };
            if (availability[i] === 'monday') { monday = true };
            if (availability[i] === 'tuesday') { tuesday = true };
            if (availability[i] === 'wednesday') { wednesday = true };
            if (availability[i] === 'thursday') { thursday = true };
            if (availability[i] === 'friday') { friday = true };
            if (availability[i] === 'saturday') { saturday = true };
        }

        try {
            const body = {
                leaguename: leagueName,
                preferedrole: preferedRole,
                secondaryrole: secondaryRole,
                sunday: sunday,
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
                saturday: saturday
            };

            // eslint-disable-next-line no-unused-vars
            const response = await fetch("http://localhost:5000/users", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="border">
            <h2>New user cannot see this page</h2>
            <label htmlFor="editAccount"><h2>Edit Account</h2></label>
            <form name="editAccount" onSubmit={onSubmit}>

                {/*
                <label htmlFor="newPassword">New Password: </label>
                <input></input>
                <p></p>
                */}

                <label htmlFor="leagueName">What is your new name on League of Legends? </label>
                <input type="text" value={leagueName} onChange={e => setLeagueName(e.target.value)}></input>
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
                <button typeof="submit">Submit</button>
                <Link to="/">Cancel</Link>
            </form>
        </div>
    )
}

export default AccountEdit;
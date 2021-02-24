import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import URI from '../constance/URI';

const CreateAccount = () => {

    //set input values
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [retype, setRetype] = useState('');
    const [leagueName, setLeagueName] = useState("");
    const [message, setmessage] = useState('');
    const [userStatus, setUserStatus] = useState('');
    const [usernamelogged, setUsernameLogged] = useState('');

    //submit button
    const onSubmit = async (e) => {

        e.preventDefault();

        //Check passwords match
        if (password !== retype) {
            setmessage('The passwords do not match!');
            return;
        }

        //Check password length
        if (password.length < 8 || password.length > 18) {
            setmessage('Password must be 8 to 18 characters!');
            return;
        }

        //set body values
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
        let status = 'User';
        const team = 'Freelance';

        for (let i = 0; i < boxesChecked.length; i++) {
            availability.push(boxesChecked[i].value);
        }

        //check for selected options
        for (let i = 0; i < availability.length; i++) {
            if (availability[i] === 'sunday') { sunday = true };
            if (availability[i] === 'monday') { monday = true };
            if (availability[i] === 'tuesday') { tuesday = true };
            if (availability[i] === 'wednesday') { wednesday = true };
            if (availability[i] === 'thursday') { thursday = true };
            if (availability[i] === 'friday') { friday = true };
            if (availability[i] === 'saturday') { saturday = true };
        }

        console.log('Test');

        try {
            //body for /users db
            const userBody = {
                leaguename: leagueName,
                preferedrole: preferedRole,
                secondaryrole: secondaryRole,
                sunday: sunday,
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
                saturday: saturday,
                team: team
            };

            console.table(userBody);

            const userid = await fetch(`${URI}/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userBody)
            })
                .then(userResponse => userResponse.json())
                .then(uResponse => {
                    console.log('UResponse');
                    console.table(uResponse);
                });

            console.log(userid);

            //body for /accounts db
            const accountBody = {
                userid: userid,
                username: userName,
                password: password,
                status: status
            }

            await fetch(`${URI}/accountstatus`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(accountBody)
            })
                .then(result => result.json())
                .then(result => {
                    console.table(result);
                    if (result.token) window.sessionStorage.setItem('x-auth-token', result.token);
                    if (result.message) setmessage(result.message);
                })

            //window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    }

    //check auth token if available
    const bootup = async () => {
        if (window.sessionStorage.getItem('x-auth-token')) {
            const x_auth_token = window.sessionStorage.getItem('x-auth-token');
            await fetch(`${URI}/auth/decode`, {
                headers: { "x-auth-token": x_auth_token }
            }).then(res => res.json()).then(response => {
                if (response.status) setUserStatus(response.status)
                if (response.name) setUsernameLogged(response.name)
            });
        }
    };

    useEffect(() => {
        bootup();
    });

    return (
        <div className="border">
            {!userStatus && <div>
                <label htmlFor="createAccount"><h2>Create an Account</h2></label>
                <form name="createAccount" onSubmit={onSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" value={userName} onChange={e => setUserName(e.target.value)} required></input>
                    <p></p>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                    <p></p>
                    <label htmlFor="retype">Retype the Password: </label>
                    <input type="password" id="retype" value={retype} onChange={e => setRetype(e.target.value)} required></input>
                    <p></p>
                    <label htmlFor="leagueName">What is your name on League of Legends? </label>
                    <input id="leagueName" type="text" value={leagueName} onChange={e => setLeagueName(e.target.value)} required></input>
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
                                <input type="checkbox" id="sundayBox" value="sunday"></input>
                                <label htmlFor="sundayBox">Sunday</label>
                            </div>
                            <div className="flex">
                                <input type="checkbox" id="mondayBox" value="monday"></input>
                                <label htmlFor="mondayBox">Monday</label>
                            </div>
                            <div className="flex">
                                <input type="checkbox" id="tuesdayBox" value="tuesday"></input>
                                <label htmlFor="tuesdayBox">Tuesday</label>
                            </div>
                            <div className="flex">
                                <input type="checkbox" id="wednesdayBox" value="wednesday"></input>
                                <label htmlFor="wednesdayBox">Wednesday</label>
                            </div>
                            <div className="flex">
                                <input type="checkbox" id="thursdayBox" value="thursday"></input>
                                <label htmlFor="thursdayBox">Thursday</label>
                            </div>
                            <div className="flex">
                                <input type="checkbox" id="fridayBox" value="friday"></input>
                                <label htmlFor="fridayBox">Friday</label>
                            </div>
                            <div className="flex">
                                <input type="checkbox" id="saturdayBox" value="saturday"></input>
                                <label htmlFor="saturdayBox">Saturday</label>
                            </div>
                        </div>
                    </div>
                    <p className='redletter'>{message}</p>
                    <button type="submit">Submit</button>
                    <Link to="/">Cancel</Link>
                </form>
            </div>}

            {userStatus && <h2>Logged in as {usernamelogged}</h2>}
            {userStatus && <Link to="/">Home</Link>}
        </div>
    )
}

export default CreateAccount;
import React from 'react';
import { Link } from 'react-router-dom';

export default function createTeam() {
    return (
        <div>
            <section className="border">
                <label htmlFor="teamLeader">Who is the team leader? </label>
                <select name="teamLead" id="teamLeader">
                    <option value=""></option>
                    <option value="bailey">Bailey</option>
                    <option value="jwm">JWM</option>
                    <option value="nunyuhBusiness">NunyuhBusiness</option>
                    <option value="brommstein">Brommstein</option>
                    <option value="lucy_lulu">Lucy Lulu</option>
                </select>
                <p></p>
                <label htmlFor="topLaner">Who is your top laner? </label>
                <select name="top" id="topLaner">
                    <option value=""></option>
                    <option value="bailey">Bailey</option>
                    <option value="trooper">Trooper</option>
                </select>
                <p></p>
                <label htmlFor="jungler">Who is your jungler? </label>
                <select name="jungle" id="jungler">
                    <option value=""></option>
                    <option value="jwm">JWM</option>
                    <option value="mercinary_wolf">Mercinary Wolf</option>
                </select>
                <p></p>
                <label htmlFor="midlaner">Who is your mid laner? </label>
                <select name="mid" id="midlaner">
                    <option value=""></option>
                    <option value="nunyuhBusiness">NunyuhBusiness</option>
                    <option value="reece">Reece</option>
                </select>
                <p></p>
                <label htmlFor="adcLaner">Who is your adc? </label>
                <select name="adc" id="adcLaner">
                    <option value=""></option>
                    <option value="brommstein">Brommstein</option>
                    <option value="vermillion">Vermillion</option>
                </select>
                <p></p>
                <label htmlFor="supportLaner">Who is your support? </label>
                <select name="support" id="supportLaner">
                    <option value=""></option>
                    <option value="lucy_lulu">Lucy Lulu</option>
                    <option value="aloe">Aloe</option>
                </select>
                <p></p>
                <input type="button" value="Submit"></input>
                <Link to="/teams">Cancel</Link>
            </section>
        </div>
    )
}
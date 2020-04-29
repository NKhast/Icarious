import React from 'react'

import './InfoBar.css'
import personImg from '../../Images/person.jpg'

function InfoBar({ room }) {
    return (
        <div className="InfoBar">
            <div className="InfoBar-container">
            <div className="room-heading">
                <h2><i className="fas fa-heart"></i> { room }</h2>
            </div>
            <div className="btn-logout">
                <a href="/">Logout</a>
            </div>
            </div>

            <div className="info">
                <div className="info-text">
                <h1>Stay Home and Be Safe</h1>
                <p>Icarious invites you to stay home durig the COVID-19 outbreak and enjoy chatting with your loved ones.</p>
                </div>

                <div className="info-img">
                    <img src={personImg} className="info-img"/>
                </div>
            </div>
        </div>
    )
}

export default InfoBar

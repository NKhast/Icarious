import React from 'react'

import './TextContainer.css'
import appLogo from '../../Images/logo.png'

const TextContainer = ({ users }) => (

            <div className="TextContainer">
                {/* <img src={appLogo} className="logo" /> */}
                <div>
                    <h2><i className="fas fa-home"></i> Channels</h2>
                    <div className="activeContainer">
                    </div>
                </div>
                {
                    users
                        ? (
                            <div>
                                <h2><i className="fas fa-user"></i> Online Users</h2>
                                <div className="activeContainer">
                                    {users.map(({ name }) => (
                                        <div key={name} className="activeItem">
                                            <i className="fas fa-circle online-icon"></i>
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                        : null
                }
            </div>
    )

export default TextContainer
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'
import social from '../../Images/social.jpg'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return(
        <div className="JoinOutContainer">
            <div className="JoinInContainer">
                <h1 className="heading">
                    <span className="small">Icarious App</span>
                    High level communication tool</h1>

                    <p>Sign in to your Icarious account</p>
                <div><input type="text" placeholder="Username" className="JoinInput" onChange={(event) => setName(event.target.value)}/></div>
                <div><input type="text" placeholder="Group Name" className="JoinInput mt-20" onChange={(event) => setRoom(event.target.value)}/></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" className="button mt-20 login">Sign in</button>
                </Link>
                <p><a className="forgot">Forgot Username?</a></p>
            </div>

            <div className="loginContainer">
                <h1 className="heading"><span>New here?</span>Join Icarious and enjoy interacting with others</h1>
                <p>Icarious works on your own servers, No data goes out.</p>
                <button type="submit" className="button mt-20 signup">Click here to SignUp</button>
                <img src={social} className="login-image"/>
            </div>
        </div>
    )
}

export default Join;
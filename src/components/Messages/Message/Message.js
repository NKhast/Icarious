import React from 'react'

import  ReactEmoji  from 'react-emoji'

import './Message.css'
 const Message = ({ message: { text, user }, name }) => {
     let isSentByCurrentUser = false

     const trimmedName = name.trim().toLowerCase()

     if(user === trimmedName){
        isSentByCurrentUser = true
     }
    return (
        isSentByCurrentUser 
        ?(
            <div className="messageContainer justifyStart">
                <p className="sentText">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                 <p className="messageText colorWhit">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
        :(
            <div className="messageContainer justifyStart">
                <p className="sentText pl-10">{user}</p>
                <div className="messageBox backgroundLight">
                  <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>

            </div>
        )
    )
}

export default Message
import React from 'react'
import style from './Message.module.css'
type MessageType = {
    avatar:string
    name:string
    message:string
    time:string
}

export const Message = (props:MessageType) => {
    return (
        <div className={style.messagemodule}>
            <img className={style.img} src={props.avatar} alt={'img'}/>
            <div className={style.notice}>
                <h4 className={style.name}>{props.name}</h4>
                <p className={style.message}>{props.message}</p>
                <h5 className={style.time}>{props.time}</h5>
            </div>

        </div>
    )
}



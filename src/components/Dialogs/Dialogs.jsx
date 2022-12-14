import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.messageItem}>{props.messageText}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogStyle}>
            <div className={s.dialogs}>
                <DialogItem name="Vasya" id="1" />
                <DialogItem name="Petya" id="2" />
                <DialogItem name="Denis" id="3" />
                <DialogItem name="Penis" id="4" />
            </div>
            <div className={s.messages}>
                <Message messageText="Hi" />
                <Message messageText="How are you" />
                <Message messageText="Salam" />
                <Message messageText="Kalam" />
            </div>
        </div>
    )
}

export default Dialogs;
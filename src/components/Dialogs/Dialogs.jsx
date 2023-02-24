import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.messages.map(message => <Message messageText={message.messageText} />)
    return (
        <div className={s.dialogStyle}>
            <div className={s.dialogs}>
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {/* <Message messageText={messagesData[0].messageText} />
                <Message messageText={messagesData[1].messageText} /> */}
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
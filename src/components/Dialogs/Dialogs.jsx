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


let dialogsData = [{ name: "Dima", id: 1 },
{ name: "Vasya", id: 2 }]

let messagesData = [{ messageText: "Hi", id: 1 },
{ messageText: "How are you", id: 2 }]

let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
let messagesElements = messagesData.map(message => <Message messageText={message.messageText} />)


const Dialogs = (props) => {
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
import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let dialogRef = React.createRef();

let newDialog = () => {
    let text = dialogRef.current.value;
    alert(text);
}

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message messageText={message.messageText} />)

    return (
        <div className={s.dialogStyle}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textAreaStyle}>
                <textarea ref={dialogRef} name="" id="" rows="5" className={s.text}>D</textarea>
                <button onClick={newDialog} className={s.button}>Send</button>
            </div>
        </div>
    )
}



export default Dialogs;
import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogStyle}>
            <div className={s.dialogs}>
                <div className={s.dialogItem}>Vasya</div>
                <div className={s.dialogItem}>Dima</div>
                <div className={s.dialogItem}>Oleg</div>
                <div className={s.dialogItem}>Nikita</div>
            </div>
            <div className={s.messages}>
                <div className={s.messageItem}>Hello</div>
                <div className={s.messageItem}>Hi</div>
                <div className={s.messageItem}>Salam</div>
                <div className={s.messageItem}>Popolam</div>
            </div>
        </div>
    )
}

export default Dialogs;
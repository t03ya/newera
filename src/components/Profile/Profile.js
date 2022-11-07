import React from "react";
import c from './Profile.module.css'
import Myposts from './Myposts/Myposts'

const Profile = () => {
    return (<div className={c.content}>
        <div> <img src='https://www.euromag.ru/storage/c/2017/02/07/1486458009_997571_58.jpg' width={500} /></div>
        <div>ava + description</div>
        <Myposts />
    </div>)
}

export default Profile;
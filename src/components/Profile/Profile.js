import React from "react";
import c from './Profile.module.css'
import Myposts from './Myposts/Myposts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (<div className={c.content}>
        <ProfileInfo />
        <Myposts />
    </div>)
}

export default Profile;
import React from "react";
import c from './Profile.module.css'
import Myposts from './Myposts/Myposts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => (
   <div className={c.content}>
        <ProfileInfo />
        <Myposts posts={props.profilePage} dispatch={props.dispatch} />
    </div>
)

export default Profile;
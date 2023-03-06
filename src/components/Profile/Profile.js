import React from "react";
import c from './Profile.module.css'
import Myposts from './Myposts/Myposts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost } from '../../state/state';

const Profile = (props) => {
    return (<div className={c.content}>
        <ProfileInfo />
        <Myposts posts={props.profilePage} addPost={props.addPost} updatePost={props.updatePost}/>
    </div>)
}

export default Profile;
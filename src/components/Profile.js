import React from "react";
import c from './Profile.module.css'

const Profile = () => {
    return (<div className={c.content}>
        <div> <img src='https://www.euromag.ru/storage/c/2017/02/07/1486458009_997571_58.jpg' width={500} /></div>
        <div>ava + description</div>
        <div>My posts
            <div>New post</div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    </div>)
}

export default Profile;
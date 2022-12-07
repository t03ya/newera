
import React from "react";
import c from './Myposts.module.css'
import Post from './post/Post'

const Myposts = () => {
    return (<div>My posts
        <div>
            <textarea>Write your post...</textarea>
            <div><button>New post</button></div>
        </div>
        <Post message='hi' like='3'/>
        <Post message='how are you' like='1'/>

    </div>
    )
}

export default Myposts;
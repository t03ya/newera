
import React from "react";
import c from './Myposts.module.css'
import Post from './post/Post'

const Myposts = () => {
    return (<div>My posts
        <div>
            <textarea>Write your post...</textarea>
            <div><button>New post</button></div>
        </div>
        <Post />
    </div>
    )
}

export default Myposts;
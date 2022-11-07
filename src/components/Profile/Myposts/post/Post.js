import React from "react";
import c from './Post.module.css'

const Post = () => {
    return (
        <div className={c.post}>
            <img src="https://cyberofsport.com/wp-content/uploads/2022/02/mgidarccontentnick.comc008fa9d_d.0.jpg" />
            <div>Post 1</div>
            <span>like</span>
        </div>
    )
}

export default Post;
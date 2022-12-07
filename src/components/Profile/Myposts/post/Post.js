import React from "react";
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.post}>
            <img src="https://cyberofsport.com/wp-content/uploads/2022/02/mgidarccontentnick.comc008fa9d_d.0.jpg" />
            <div>{props.message}</div>
            <span>likes: {props.like}</span>
        </div>
    )
}

export default Post;

import React from "react";
import c from './Myposts.module.css'
import Post from './post/Post'



const Myposts = (props) => {

    let postRef = React.createRef();

    let addPost = () => {
        props.addPost(postRef.current.value);
    }

    let onPostChange = () => {
        props.updatePost(postRef.current.value);
    }

    let postsElements = props.posts.postsData.map(post => <Post message={post.postText} like={post.like} />)
    return (
        <div>My posts
            <div>
                <textarea ref={postRef} value={props.posts.postUpdate.postText} onChange={onPostChange}></textarea>
                <div><button onClick={addPost}>New post</button></div>
            </div>

            {postsElements}


        </div>
    )
}

export default Myposts;
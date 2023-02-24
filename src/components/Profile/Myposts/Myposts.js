
import React from "react";
import c from './Myposts.module.css'
import Post from './post/Post'

let postsData = [
    {postText: "wow", post: 1, like: '0'},
    {postText: "this", post: 2, like: '323'},
    {postText: "stena", post: 3, like: '2'}

]

let postsElements = postsData.map(post => <Post message={post.postText} like={post.like}/>
)

const Myposts = () => { 
    return (<div>My posts
        <div>
             <textarea>Write your post...</textarea>
            <div><button>New post</button></div>
        </div>
        {/* <Post message={postsData[0].postText} like={postsData[0].like}/>
        <Post message={postsData[1].postText} like={postsData[1].like}/>
        <Post message={postsData[2].postText} like={postsData[2].like}/> */}
        {postsElements}


    </div>
    )
}

export default Myposts;
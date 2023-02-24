
import { rerenderEntireTree } from '../render';

let state = {


    profilePage:
    {

        postsData: [
            { postText: "wosws", post: 1, like: '0' },
            { postText: "this", post: 2, like: '323' },
            { postText: "stena", post: 3, like: '2' }
        ]

    },

    dialogsPage:
    {
        dialogsData: [
            { name: "Dimas", id: 1 },
            { name: "Vasya", id: 2 },
            { name: "Vasya", id: 3 },
            { name: "Vasya", id: 4 },
        ],

        messagesData: [
            { messageText: "His", id: 1 },
            { messageText: "How are you", id: 2 },
            { messageText: "How are you", id: 3 },
            { messageText: "How are you", id: 4 },
            { messageText: "How are you", id: 5 }
        ],
    }

}


export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        post: 1,
        postText: postMessage,
        like: 3
    }
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export default state;

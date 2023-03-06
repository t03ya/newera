
let store = () => {
    
}


let rerenderEntireTree = () => {
    console.log('state changed!');
}



let state = {
    profilePage:
    {

        postsData: [
            { postText: "wosws", post: 1, like: '0' },
            { postText: "this", post: 2, like: '323' },
            { postText: "stena", post: 3, like: '2' }
        ],

        postUpdate: [
            { postText: "salam" }
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


export const addPost = (postMessage) => {

    let newPost = {
        post: 1,
        postText: postMessage,
        like: 3
    }
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
    // state.profilePage.newPost.postText = '';
}



export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export const updatePost = (postText) => {
    state.profilePage.postUpdate.postText = postText;
    rerenderEntireTree(state);
}


window.state = state;
export default state;

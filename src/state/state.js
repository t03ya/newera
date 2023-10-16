
let store = {
    _state: {
        profilePage:
        {

            postsData: [
                { postText: "wosws", post: 1, like: '0' },
                { postText: "this", post: 2, like: '323' },
                { postText: "stena", post: 3, like: '2' }
            ],

            postUpdate: { postText: "salam" }


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
            ]
        }
    },

    _callSubscriber() {
        console.log('state changed!')
    },

    getState() {
        return this._state;
    },

    setState() {
        this._state = this._state;
    },

    addPost() {
        let newPost = {
            post: 1,
            postText: this._state.profilePage.postUpdate.postText,
            like: 3
        }
        this._state.profilePage.postsData.push(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.postUpdate.postText = '';
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    updatePost(postText) {
        this._state.profilePage.postUpdate.postText = postText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        console.log('99', this)
        if(action.type === 'ADD-POST')
        {
            let newPost = {
                post: 1,
                postText: this._state.profilePage.postUpdate.postText,
                like: 3
            }
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.postUpdate.postText = '';
        } else if (action.type === 'UPDATE-POST-TEXT')
        {

            this._state.profilePage.postUpdate.postText = action.text;
            this._callSubscriber(this._state);
        }
    },
}


window.store = store;
export default store;

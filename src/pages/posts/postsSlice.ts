import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
    id: string,
    title: string,
    content: string,
    date: string,
    userId: string,
    name: string,
};

const initialState: Post[] = [
    { 
        id: '1', 
        title: 'First Post!', 
        content: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto', 
        date: '2005' ,
        userId: '0',
        name: 'Pavel',
    },
    { 
        id: '2', 
        title: 'Second Post', 
        content: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut', 
        date:  '2006',
        userId: '1',
        name: 'Ivan',
    },
    { 
        id: '3', 
        title: 'Third Post', 
        content: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut', 
        date:  '2006',
        userId: '2',
        name: 'Scott',
    },
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action: PayloadAction<Post>) {
            const { userId, date, title, content, name } = action.payload;
            const id = Math.max(...state.map(post => +post.id)) + 1;
            const post: Post = { id: id + '', title, content, date, userId, name };
            return [
                ...state,
                post
            ];
        },
        postDelete(state, action: PayloadAction<string>) {
            const posts = state.filter(post => post.id !== action.payload);
            return posts;
        },
        saveEditedPost(state, action: PayloadAction<Post>) {
            const { id, userId, date, title, content, name } = action.payload;
            
            const newState: Post[] = state.map(post => {
                if(post.id === id) {
                   return { id, userId, date, title, content, name };
                } else {
                    return  post;
                }
            });
            
            return newState;
        },  
    },
});

export const { postAdded, postDelete, saveEditedPost } = postSlice.actions;

export default postSlice.reducer;
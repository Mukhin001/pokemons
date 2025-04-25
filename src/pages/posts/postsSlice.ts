import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
    id?: string,
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
        name: 'Ivan',
    },
    { 
        id: '2', 
        title: 'Second Post', 
        content: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut', 
        date:  '2006',
        userId: '1',
        name: 'Petr',
    },
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action: PayloadAction<Post>) {
            const { userId, date, title, content, name } = action.payload;
            const id = +state.length + 1 + '';
            const post: Post = { id: id, title, content, date, userId, name };
            return [
                ...state,
                post
            ];
        },
    },
});

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
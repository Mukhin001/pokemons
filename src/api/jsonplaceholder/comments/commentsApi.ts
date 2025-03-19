import { jsonplaceholderApi } from "../jsonplaceholderApi";

export type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

type NewComment = Pick<Comment, 'body' | 'email' | 'name' | 'postId'>;

const commentsApi = jsonplaceholderApi.injectEndpoints({
    endpoints: (builder) => ({
        getComments: builder.query<Comment[], void>({
            query: () => '/comments',
            providesTags: ['Comment'],
        }),
        addNewComment: builder.mutation<Comment, NewComment>({
            query: intialComment => ({
                url: '/comments',
                method: 'POST',
                body: intialComment,
            }),
            invalidatesTags: ['Comment'],
        }),
    }),
});

export const { useGetCommentsQuery, useAddNewCommentMutation } = commentsApi;
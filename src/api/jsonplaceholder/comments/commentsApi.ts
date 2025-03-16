import { jsonplaceholderApi } from "../jsonplaceholderApi";

type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

const commentsApi = jsonplaceholderApi.injectEndpoints({
    endpoints: (builder) => ({
        getComments: builder.query<Comment[], void>({
            query: () => '/comments',
        }),
    }),
});

export const { useGetCommentsQuery } = commentsApi;
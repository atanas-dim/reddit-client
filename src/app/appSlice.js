import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostsHot, fetchPostsNew, fetchPostsTop, fetchSubredditAbout, fetchComments, fetchSearchResults } from '../api/reddit-api';

export const loadPostsHot = createAsyncThunk(
    "app/loadSubredditPostsHot",
    async (subreddit) => {
        return await fetchPostsHot(subreddit);
    }
);

export const loadPostsNew = createAsyncThunk(
    "app/loadSubredditPostsNew",
    async (subreddit) => {
        return await fetchPostsNew(subreddit);
    }
);

export const loadPostsTop = createAsyncThunk(
    "app/loadSubredditPostsTop",
    async (subreddit) => {
        return await fetchPostsTop(subreddit);
    }
);

export const loadSearchResults = createAsyncThunk(
    "app/loadSearchResults",
    async (searchTerm) => {
        return await fetchSearchResults(searchTerm);
    }
);

export const loadSubredditAbout = createAsyncThunk(
    "app/loadSubredditAbout",
    async (subreddit) => {
        return await fetchSubredditAbout(subreddit);
    }
);

export const loadComments = createAsyncThunk(
    "app/loadComments",
    async ( {index, permalink} ) => {
        const comments =  await fetchComments(permalink);
        return {index: index, comments: comments}
    }
);

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        posts: [],
        about: [],
        isLoading: false,
        error: false
    },
    reducers: {
        setShowingComments: (state, action) => {
            // console.log(action);
            state.posts[action.payload.index].showingComments = action.payload.showingComments
        },
        setCommentsNum: (state, action) => {
            // console.log(action);
            state.posts[action.payload.index].commentsNum = action.payload.commentsNum;
        },
        setIsLoadingComments: (state, action) => {
            // console.log(action);
            state.posts[action.payload.index].isLoadingComments = action.payload.isLoadingComments;
        },
    },
    extraReducers: {
        // LOAD HOT POSTS
        [loadPostsHot.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            state.error = false;
        },
        [loadPostsHot.fulfilled]: (state, action) => {
            console.log('fulfilled')
            state.posts = action.payload;
            state.posts.map(post => {
                post.showingComments = false;
                post.comments = [];
                post.commentsNum = 3;
                post.isLoadingComments = false;
                return post;
            })
            state.isLoading = false;
        },
        [loadPostsHot.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
            state.error = true;
        },

        // LOAD NEW POSTS
        [loadPostsNew.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            state.error = false;
        },
        [loadPostsNew.fulfilled]: (state, action) => {
            console.log('fulfilled')
            state.posts = action.payload;
            state.posts.map(post => {
                post.showingComments = false;
                post.comments = [];
                post.commentsNum = 3;
                post.isLoadingComments = false;
                return post;
            })
            state.isLoading = false;
        },
        [loadPostsNew.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
            state.error = true;
        },

        // LOAD TOP POSTS
        [loadPostsTop.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            state.error = false;
        },
        [loadPostsTop.fulfilled]: (state, action) => {
            console.log('fulfilled')
            state.posts = action.payload;
            state.posts.map(post => {
                post.showingComments = false;
                post.comments = [];
                post.commentsNum = 3;
                post.isLoadingComments = false;
                return post;
            })
            state.isLoading = false;
        },
        [loadPostsTop.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
            state.error = true;
        },

        // LOAD SEARCH RESULTS
        [loadSearchResults.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            state.error = false;
        },
        [loadSearchResults.fulfilled]: (state, action) => {
            console.log('fulfilled')
            state.posts = action.payload;
            state.posts.map(post => {
                post.showingComments = false;
                post.comments = [];
                post.commentsNum = 3;
                return post;
            })
            state.isLoading = false;
        },
        [loadSearchResults.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
            state.error = true;
        },

        //SUBREDDIT ABOUT
        [loadSubredditAbout.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            state.error = false;
        },
        [loadSubredditAbout.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.about = action.payload;
            state.isLoading = false;
        },
        [loadSubredditAbout.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
            state.error = true;
        },

        // LOAD COMMENTS
        [loadComments.pending]: (state, action) => {
            console.log('pending')
            state.posts[action.meta.arg.index].comments = [];
            state.posts[action.meta.arg.index].isLoadingComments = true;

            console.log(state.posts[action.meta.arg.index].isLoadingComments);
        },
        [loadComments.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.posts[action.payload.index].comments = action.payload.comments;
            state.posts[action.meta.arg.index].isLoadingComments = false;
        },
        [loadComments.rejected]: (state, action) => {
            console.log('rejected')
            state.posts[action.meta.arg.index].isLoadingComments = false;
        },
    }
})

export const selectAbout = state => state.app.about;
export const selectPosts = state => state.app.posts;
export const selectIsLoading = state => state.app.isLoading;
export const selectError = state => state.app.error;
export const { setShowingComments, setCommentsNum, setIsLoadingComments } = appSlice.actions;
export default appSlice.reducer;
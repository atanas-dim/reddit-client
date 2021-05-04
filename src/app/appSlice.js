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
    },
    reducers: {
        setShowingComments: (state, action) => {
            console.log(action);
            state.posts[action.payload.index].showingComments = !action.payload.showingComments
        },
        setCommentsNum: (state, action) => {
            console.log(action);
            state.posts[action.payload.index].commentsNum = action.payload.commentsNum;
        },
    },
    extraReducers: {
        // LOAD HOT POSTS
        [loadPostsHot.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            console.log(state.isLoading);
        },
        [loadPostsHot.fulfilled]: (state, action) => {
            console.log('fulfilled')
            state.posts = action.payload;
            state.posts.map(post => {
                post.showingComments = false;
                post.comments = [];
                post.commentsNum = 3;
                return post;
            })
            // console.log(state.posts);
            state.isLoading = false;
        },
        [loadPostsHot.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
        },

        // LOAD NEW POSTS
        [loadPostsNew.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            console.log(state.isLoading);
        },
        [loadPostsNew.fulfilled]: (state, action) => {
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
        [loadPostsNew.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
        },

        // LOAD TOP POSTS
        [loadPostsTop.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            console.log(state.isLoading);
        },
        [loadPostsTop.fulfilled]: (state, action) => {
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
        [loadPostsTop.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
        },

        // LOAD SEARCH RESULTS
        [loadSearchResults.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            console.log(state.isLoading);
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
        },

        //SUBREDDIT ABOUT
        [loadSubredditAbout.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
        },
        [loadSubredditAbout.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.about = action.payload;
            state.isLoading = false;
        },
        [loadSubredditAbout.rejected]: (state, action) => {
            console.log('rejected')
            state.isLoading = false;
        },

        // LOAD COMMENTS
        [loadComments.pending]: (state, action) => {
            //Don't fetch if it's already showing comments
            if(state.posts[action.meta.arg.index].showingComments === true) {
                return;
            }
            console.log('pending')
        },
        [loadComments.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        [loadComments.rejected]: (state, action) => {
            console.log('rejected')
        },
    }
})

export const selectAbout = state => state.app.about;
export const selectPosts = state => state.app.posts;
export const selectIsLoading = state => state.app.isLoading;
export const { setShowingComments, setCommentsNum } = appSlice.actions;
export default appSlice.reducer;
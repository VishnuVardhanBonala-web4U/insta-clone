// postSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts as fetchPostsApi, createPost as createPostApi, fetchComments as fetchCommentsApi, createComment as createCommentApi } from '../../services/apiService';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetchPostsApi();
  return response.data;
});

export const createNewPost = createAsyncThunk('posts/createNewPost', async (newPost) => {
  const response = await createPostApi(newPost);
  return response.data;
});

export const fetchComments = createAsyncThunk('posts/fetchComments', async (postId) => {
  const response = await fetchCommentsApi(postId);
  return { postId, comments: response.data };
});

export const createNewComment = createAsyncThunk('posts/createNewComment', async ({ postId, comment }) => {
  const response = await createCommentApi(postId, comment);
  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], comments: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const { postId, comments } = action.payload;
        state.comments[postId] = comments;
      })
      .addCase(createNewComment.fulfilled, (state, action) => {
        const { postId, ...comment } = action.payload;
        state.comments[postId] = state.comments[postId] ? [...state.comments[postId], comment] : [comment];
      });
  },
});

export default postSlice.reducer;

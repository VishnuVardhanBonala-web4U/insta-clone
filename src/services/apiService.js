// apiService.js
import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = () => {
  return apiService.get('/posts');
};

export const createPost = (newPost) => {
  // Simulate post creation (since JSONPlaceholder is read-only)
  return Promise.resolve({ data: { ...newPost, id: Math.floor(Math.random() * 1000) } });
};

export const fetchComments = (postId) => {
  return apiService.get(`/posts/${postId}/comments`);
};

export const createComment = (postId, comment) => {
  // Simulate comment creation (since JSONPlaceholder is read-only)
  return Promise.resolve({ data: { postId, ...comment, id: Math.floor(Math.random() * 1000) } });
};

export default apiService;

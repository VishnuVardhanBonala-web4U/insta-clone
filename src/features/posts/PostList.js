// PostList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';
import PostItem from './PostItem';
import Container from '@mui/material/Container';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default PostList;

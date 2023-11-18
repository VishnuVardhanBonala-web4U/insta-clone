// PostItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchComments, createNewComment } from './postSlice';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  const handleLoadComments = () => {
    dispatch(fetchComments(post.id));
  };

  const handleCreateComment = (comment) => {
    dispatch(createNewComment({ postId: post.id, comment }));
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px 0' }}>
      <Typography variant="h6">{post.title}</Typography>
      {/* Display post content and other details */}
      <Button variant="outlined" color="primary" onClick={handleLoadComments}>
        Load Comments
      </Button>
      <CommentList postId={post.id} />
      <CommentForm onCommentSubmit={handleCreateComment} />
    </Paper>
  );
};

export default PostItem;

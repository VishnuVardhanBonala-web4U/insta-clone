// CommentForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewComment } from './postSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CommentForm = ({ postId, onCommentSubmit }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewComment({ postId, comment }));
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Add Comment"
        variant="outlined"
        fullWidth
        value={comment}
        onChange={handleChange}
        style={{ marginTop: '16px' }}
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '8px' }}>
        Add Comment
      </Button>
    </form>
  );
};

export default CommentForm;

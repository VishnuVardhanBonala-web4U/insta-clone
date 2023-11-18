// CommentList.js
import React from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

const CommentList = ({ postId }) => {
  const comments = useSelector((state) => state.posts.comments[postId] || []);

  return (
    <List>
      {comments.map((comment) => (
        <ListItem key={comment.id}>
          <Typography>{comment.body}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default CommentList;

// src/App.js
import React from 'react';
import AuthForm from './components/AuthForm';
import Header from './components/Header';
import PostList from './features/posts/PostList';

const App = () => {
  return (
    <div>
      <Header />
      <AuthForm />
      <PostList />
    </div>
  );
};

export default App;

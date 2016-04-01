// main.js
var React = require('react');
var ReactDOM = require('react-dom');

define(["react", "react-dom", "./components/CommentBox"],
  (React, ReactDOM, CommentBox) => {

  ReactDOM.render(
    React.createElement(CommentBox, {comments: ['Comment 1', 'Comment 2']}),
    document.getElementById('content')
  );
});
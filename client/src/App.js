import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Nabvar from './Components/Nabvar';
import Post from './Components/Post';
import DetailedPost from './Routes/DetailedPost/DetailedPost';
import EditPost from './Routes/Edit/EditPost';
import Edit from './Routes/Edit/Edit';
import Create from './Routes/Create/Create';
import FetchAppData from './FetchAppData';

function App() {
  const { posts } = FetchAppData();

  return (
    <div>
      <Nabvar />
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <Home posts={posts} />
          )}
        />
        <Route
          exact
          path="/detail"
          render={() => (
            <Post />
          )}
        />
        <Route path="/posts/:postId" component={DetailedPost} />
        <Route path="/edit/:postId" component={EditPost} />
        <Route
          exact
          path="/edit"
          render={() => (
            <Edit posts={posts} />
          )}
        />
        <Route path="/create" component={Create} />
      </Router>
    </div>
  );
}

export default App;

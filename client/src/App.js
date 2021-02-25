import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import Home from './Components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nabvar from './Components/Nabvar'
import Post from './Components/Post';
import DetailedPost from './DetailedPost';

function App() {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      });
  };

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <Nabvar/>
      <Router>
        <Route
        exact path="/"
        render={() => (
          <Home posts={posts} />
        )}
      />
      <Route exact path="/detail"
      render={() => (
        <Post />
      )}
      />
      <Route path={`/posts/:postId`} component={DetailedPost} />
      </Router>
    </div>   
  );
}

export default App;

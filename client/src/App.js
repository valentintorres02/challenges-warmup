import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import Home from './Components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nabvar from './Components/Nabvar'
import Post from './Components/Post';
import DetailedPost from './Components/DetailedPost';
import EditPost from './Components/EditPost';
import Edit from './Components/Edit'
import CreatePost from './Components/CreatePost';

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
      <Route path={`/edit/:postId`} component={EditPost} />
      <Route exact path="/edit"
      render={() => (
        <Edit posts={posts}/>
      )}
      />
      <Route path={'/create'} component={CreatePost} />
      </Router>
    </div>   
  );
}

export default App;

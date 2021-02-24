import React, {useState, useEffect} from 'react';
import Axios from 'axios'

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
      Alkemy challenge individual
    </div>   
  );
}

export default App;

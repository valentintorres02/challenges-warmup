import { useState, useEffect } from 'react';
import Axios from 'axios';

const FetchAppData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      });
  }, []);
  return { posts };
};

export default FetchAppData;

import React from 'react';
import PropTypes from 'prop-types';
import Post from '../../Components/Post';

function Home({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} postId={post.id} postTitle={post.title} />
      ))}
    </div>
  );
}

Home.defaultProps = {
  posts: [],
};

Home.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    concept: PropTypes.string,
    amount: PropTypes.number,
    date: PropTypes.string,
    type: PropTypes.string,
  })),
};

export default Home;

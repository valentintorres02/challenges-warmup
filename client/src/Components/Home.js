import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types';

function Home({posts}) {
    return (
        <div>
            {posts.map(post => {
                return (
                    <Post key={post.id} postId={post.id} postTitle={post.title}/>
                )
            })}
        </div>
    )
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


export default Home

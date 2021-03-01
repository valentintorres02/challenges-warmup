import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import ChangeDisplay from './ChangeDisplay';

function DetailedPost({ match }) {
  const [blogId, setBlogId] = useState('');
  const [selectedPost, setSelectedPost] = useState([]);
  const {
    errorMessageDisplay, editFormDisplay, makeErrorMessageVisible, makeErrorMessageInvisible,
  } = ChangeDisplay();

  useEffect(() => {
    setBlogId(match.params.postId);
    if (match.params.postId > 100) {
      makeErrorMessageVisible();
    } else {
      makeErrorMessageInvisible();
    }
  }, []);

  useEffect(() => {
    Axios.get((`https://jsonplaceholder.typicode.com/posts/${blogId}`))
      .then((res) => setSelectedPost(res.data));
  }, [blogId]);

  return (
    <div className="card text-center">
      <p className={errorMessageDisplay}>Post no encontrado.</p>
      <div className={`card-body ${editFormDisplay}`}>
        <h5 className="card-title">{selectedPost.title}</h5>
        <p className="card-text">{selectedPost.body}</p>
        <a href={`/edit/${blogId}`} className="btn btn-warning" style={{ marginRight: '5px' }}>Editar</a>
        <a href="/eliminar" className="btn btn-danger" style={{ marginRight: '5px' }}>Eliminar</a>
      </div>
    </div>
  );
}

DetailedPost.defaultProps = {
  postId: 0,
  match: {},
};

DetailedPost.propTypes = {
  postId: PropTypes.number,
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string,
    }),
  }),
};

export default DetailedPost;

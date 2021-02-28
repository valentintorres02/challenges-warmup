import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

function DetailedPost(props) {
  const [blogId, setBlogId] = useState('');
  const [selectedPost, setSelectedPost] = useState([]);
  const [errorMessageDisplay, setErrorMessageDisplay] = useState('none');
  const [editFormDisplay, setEditFormDisplay] = useState('');

  useEffect(() => {
    setBlogId(props.match.params.postId);
    if (props.match.params.postId > 100) {
      setErrorMessageDisplay('');
      setEditFormDisplay('none');
    } else {
      setErrorMessageDisplay('none');
      setEditFormDisplay('');
    }
  }, []);

  useEffect(() => {
    Axios.get((`https://jsonplaceholder.typicode.com/posts/${blogId}`))
      .then((res) => setSelectedPost(res.data));
  }, [blogId]);

  return (
    <div className="card text-center">
      <p style={{ display: errorMessageDisplay }}>Post no encontrado.</p>
      <div className="card-body" style={{ display: editFormDisplay }}>
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

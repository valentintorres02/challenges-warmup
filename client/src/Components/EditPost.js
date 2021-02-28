import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

function EditPost(props) {
  const [blogId, setBlogId] = useState('');
  const [selectedPost, setSelectedPost] = useState([]);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');
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

  useEffect(() => {
    setEditedTitle(selectedPost.title);
    setEditedBody(selectedPost.body);
  }, [selectedPost]);

  const editPost = () => {
    console.log('edited');
  };

  return (
    <div>
      <div className="card text-center">
        <p style={{ display: errorMessageDisplay }}>Post no encontrado.</p>
        <div className="card-body" style={{ display: editFormDisplay }}>
          <strong>{selectedPost.id}</strong>
          <br />
          <label htmlFor="title-input">Título:</label>
          <input
            className="form-control"
            defaultValue={selectedPost.title}
            style={{ margin: '5px' }}
            name="title-input"
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <label htmlFor="body-input">Contenido:</label>
          <input
            className="form-control"
            defaultValue={selectedPost.body}
            style={{ margin: '5px' }}
            name="body-input"
            onChange={(e) => setEditedBody(e.target.value)}
          />
          <button
            className="btn btn-warning"
            type="button"
            style={{ marginTop: '5px' }}
            onClick={() => {
              editPost();
            }}
          >
            Confirmar
          </button>
        </div>
      </div>
      {console.log(editedTitle, editedBody)}
    </div>
  );
}

EditPost.defaultProps = {
  match: {},
};

EditPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string,
    }),
  }),
};

export default EditPost;

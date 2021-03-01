import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import './EditPost.css';
import ChangeDisplay from '../DetailedPost/ChangeDisplay';
import ValidateForm from '../../Validations/ValidateForm';

function EditPost(props) {
  const [blogId, setBlogId] = useState('');
  const [selectedPost, setSelectedPost] = useState([]);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');
  const {
    errorMessageDisplay, editFormDisplay, makeErrorMessageVisible, makeErrorMessageInvisible,
  } = ChangeDisplay();

  useEffect(() => {
    setBlogId(props.match.params.postId);
    console.log(props);
    if (props.match.params.postId > 100) {
      makeErrorMessageVisible();
    } else {
      makeErrorMessageInvisible();
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

  return (
    <div>
      <div className="card text-center">
        <p className={errorMessageDisplay}>Post no encontrado.</p>
        <div className={`card-body ${editFormDisplay}`}>
          <strong>{selectedPost.id}</strong>
          <br />
          <label htmlFor="title-input">Título:</label>
          <input
            className="form-control spaceOutElement"
            defaultValue={selectedPost.title}
            name="title-input"
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <label htmlFor="body-input">Contenido:</label>
          <input
            className="form-control spaceOutElement"
            defaultValue={selectedPost.body}
            name="body-input"
            onChange={(e) => setEditedBody(e.target.value)}
          />
          <button
            className="btn btn-warning spaceOutElementTop"
            type="button"
            onClick={() => {
              ValidateForm('edit', editedTitle, editedBody);
            }}
          >
            Confirmar
          </button>
        </div>
      </div>
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

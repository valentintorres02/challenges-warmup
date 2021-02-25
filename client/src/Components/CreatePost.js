import React, { useState } from 'react';

function CreatePost() {
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  return (
    <div>
      <div>
        <div className="card text-center">
          <div className="card-body">
            <label htmlFor="title-input">Título:</label>
            <input
              className="form-control"
              style={{ margin: '5px' }}
              name="title-input"
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <label htmlFor="body-input">Contenido:</label>
            <input
              className="form-control"
              style={{ margin: '5px' }}
              name="body-input"
              onChange={(e) => setNewBody(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              style={{ marginTop: '5px' }}
              onClick={() => console.log('Post creado:', newTitle, newBody)}
            >
              Crear post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

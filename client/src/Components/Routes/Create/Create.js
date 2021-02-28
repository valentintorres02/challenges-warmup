import React from 'react';
import './Create.css';
import ValidateForm from '../../Validations/ValidateForm';
import CreateNewTitle from './CreateNewTitle';
import CreateNewBody from './CreateNewBody';

function Create() {
  const { newTitle, handleTitleChange } = CreateNewTitle();
  const { newBody, handleBodyChange } = CreateNewBody();
  return (
    <div>
      <div>
        <div className="card text-center">
          <div className="card-body">
            <label htmlFor="title-input">Título:</label>
            <input
              className="form-control spaceOutElement"
              name="title-input"
              onChange={handleTitleChange}
            />
            <label htmlFor="body-input">Contenido:</label>
            <input
              className="form-control spaceOutElement"
              name="body-input"
              onChange={handleBodyChange}
            />
            <button
              className="btn btn-primary spaceOutElement"
              type="button"
              onClick={() => ValidateForm('crear', newTitle, newBody)}
            >
              Crear post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;

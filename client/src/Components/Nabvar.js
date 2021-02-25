import React from 'react';

function Nabvar() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/edit">Editar</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/create">Crear</a>
      </li>
    </ul>
  );
}

export default Nabvar;

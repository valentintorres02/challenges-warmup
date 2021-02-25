import React, {useState} from 'react'
import PropTypes from 'prop-types'

function Edit({posts}) {
    const [selectedPostToEdit, setSelectedPostToEdit] = useState('')

    return (
        <div className="text-center">
            Selecciona el post a editar.
            <br/>
            <select className="form-select" size={20} aria-label="size 3 select example" onChange={(e) => {
                setSelectedPostToEdit(e.target.value)
            }}>
                {posts.map((post) => (
                    <option value={`${post.id}`} key={post.id}>{post.title}</option>
                ))}
                </select>
                <br/>
                <a href={selectedPostToEdit ? `/edit/${selectedPostToEdit}` : ''} className="btn btn-warning">Editar</a>
        </div>
    )
}

Edit.defaultProps = {
    posts: [],
  };
  
Edit.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      concept: PropTypes.string,
      amount: PropTypes.number,
      date: PropTypes.string,
      type: PropTypes.string,
    })),
  };


export default Edit

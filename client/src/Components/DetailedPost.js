import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types';

function DetailedPost(props) {
    const [blogId, setBlogId] = useState('')
    const [selectedPost, setSelectedPost] = useState([])
    
    useEffect(() => {
        setBlogId(props.match.params.postId)
    }, [])

    useEffect(() => {
        Axios.get((`https://jsonplaceholder.typicode.com/posts/${blogId}`))
        .then(res => setSelectedPost(res.data))
    }, [blogId])

    return (
        <div className="card text-center">
  <div className="card-body">
    <h5 className="card-title">{selectedPost.title}</h5>
    <p className="card-text">{selectedPost.body}</p>
    <a href={`/edit/${blogId}`} className="btn btn-warning" style={{marginRight: '5px'}}>Editar</a>
    <a href="#" className="btn btn-danger" style={{marginRight: '5px'}}>Eliminar</a>
  </div>
</div>
    )
}

DetailedPost.defaultProps = {
    postId: 0,
    postTitle: '',
    match: {},
}

DetailedPost.propTypes = {
    postId: PropTypes.number,
    postTitle: PropTypes.string,
    match: PropTypes.object
}

export default DetailedPost

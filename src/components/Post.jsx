import classes from './Post.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Post = ({id, author, body }) => {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <h1 className={classes.author}>{author}</h1>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  )
}

Post.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  body: PropTypes.string
}

export default Post

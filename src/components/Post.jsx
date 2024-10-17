import classes from './Post.module.css'
import PropTypes from 'prop-types'

const Post = ({author, body }) => {
  return (
    <li className={classes.post}>
      <h1 className={classes.author}>{author}</h1>
      <p className={classes.text}>{body}</p>
    </li>
  )
}

Post.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string
}

export default Post
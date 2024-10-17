import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.post}>
      <h1 className={classes.author}>{props.author}</h1>
      <p className={classes.text}>{props.body}</p>
    </div>
  )
}

export default Post
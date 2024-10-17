import Post from './Post'
import classes from './PostsList.module.css'
const PostList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="John" body="React.js is awesome"/> 
      <Post author="Jane" body="Check out the full course" />
      <Post author="Joe" body="I'm loving every minute of it" />
      <Post author="Jerry" body="I'm looking for Tom! have you seen him" />
    </ul>
  )
}

export default PostList
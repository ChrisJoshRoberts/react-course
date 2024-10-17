import Post from './Post'
import classes from './PostsList.module.css'
import NewPosts from './NewPosts'
import { useState } from 'react'

const PostList = () => {
  const [output, setOutput] = useState('')
  function changeBodyHandler(event) {
    setOutput(event.target.value)
  }
  return (
  <>
    <NewPosts onBodyChange={changeBodyHandler} />
    <ul className={classes.posts}>
      <Post author="John" body={output} /> 
      <Post author="Jane" body="Check out the full course" />
      <Post author="Joe" body="I'm loving every minute of it" />
      <Post author="Jerry" body="I'm looking for Tom! have you seen him" />
    </ul>
  </>
  )
}

export default PostList
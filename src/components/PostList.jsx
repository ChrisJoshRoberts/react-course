import Post from './Post'
import classes from './PostsList.module.css'
import NewPosts from './NewPosts'
import { useState } from 'react'
import Modal from './Modal'
import PropTypes from 'prop-types'

const PostList = ({isPosting, onStopPosting}) => {
  const [output, setOutput] = useState('')
  const [author, setAuthor] = useState('')
  // Add a function to handle the change of the body input
  function changeBodyHandler(event) {
    setOutput(event.target.value)
  }
  // Add a function to handle the change of the author input
  function changeAuthorHandler(event) {
    setAuthor(event.target.value)
  }
  return (
  <>
    {isPosting && (
      <Modal onClose={onStopPosting}>
        <NewPosts
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
          onCancel={onStopPosting}
        />
      </Modal>
    )}
    <ul className={classes.posts}>
      <Post author={author} body={output} />
    </ul>
  </>
  )
}

PostList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func
}

export default PostList

import Post from './Post'
import classes from './PostsList.module.css'
import NewPosts from './NewPosts'
import { useState } from 'react'
import Modal from './Modal'

const PostList = () => {
  const [output, setOutput] = useState('')
  const [author, setAuthor] = useState('')
  const [modalVisable, setModalVisable] = useState(true)

  // Add a function to handle the change of the body input
  function changeBodyHandler(event) {
    setOutput(event.target.value)
  }
  // Add a function to handle the change of the author input
  function changeAuthorHandler(event) {
    setAuthor(event.target.value)
  }
// Hide the modal when the backdrop is clicked
  function hideModalHandler() {
    setModalVisable(false)
  }
  return (
  <>
    {modalVisable && (
      <Modal onClose={hideModalHandler}>
        <NewPosts onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
      </Modal>
    )}
    <ul className={classes.posts}>
      <Post author={author} body={output} />
      <Post author="Jane" body="Check out the full course" />
      <Post author="Joe" body="I'm loving every minute of it" />
      <Post author="Jerry" body="I'm looking for Tom! have you seen him" />
    </ul>
  </>
  )
}

export default PostList

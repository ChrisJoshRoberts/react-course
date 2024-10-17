import Post from './Post'
import classes from './PostsList.module.css'
import NewPosts from './NewPosts'
import { useState } from 'react'
import Modal from './Modal'
import MainHeader from './MainHeader'

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
    <MainHeader />
    {modalVisable && (
      <Modal onClose={hideModalHandler}>
        <NewPosts onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
      </Modal>
    )}
    <ul className={classes.posts}>
      <Post author={author} body={output} />
    </ul>
  </>
  )
}

export default PostList

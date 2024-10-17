import Post from './Post'
import classes from './PostsList.module.css'
import NewPosts from './NewPosts'
import Modal from './Modal'
import PropTypes from 'prop-types'
import { useState } from 'react'

const PostList = ({isPosting, onStopPosting}) => {
  const [posts, setPosts] = useState([])

  function addPostHandler(postDate) {
    setPosts((existingPosts) => [postDate, ...existingPosts])
  }
  return (
  <>
    {isPosting && (
      <Modal onClose={onStopPosting}>
        <NewPosts
          onCancel={onStopPosting}
          onAddPost={addPostHandler}
        />
      </Modal>
    )}
    <ul className={classes.posts}>
      {posts.map((post) => (
        <Post key={post.id} author={post.author} body={post.body} />
      ))}
    </ul>
  </>
  )
}

PostList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func
}

export default PostList

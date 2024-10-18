import Post from './Post'
import classes from './PostsList.module.css'
import NewPosts from './NewPosts'
import Modal from './Modal'
import PropTypes from 'prop-types'
import { useState } from 'react'

const PostList = ({isPosting, onStopPosting}) => {
  const [posts, setPosts] = useState([])

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }

    });
    setPosts((existingPosts) => [postData, ...existingPosts])
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
    {posts.length > 0 &&
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.body} author={post.author} body={post.body} />
        ))}
      </ul>
    }

    {posts.length === 0 &&
    <p className={classes.noPosts}>
      No posts yet. Start adding some
    !</p>}

  </>
  )
}

PostList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func
}

export default PostList

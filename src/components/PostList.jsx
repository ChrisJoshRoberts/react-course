import Post from './Post'
import classes from './PostsList.module.css'
import NewPosts from './NewPosts'
import Modal from './Modal'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const PostList = ({isPosting, onStopPosting}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }

    });
    setPosts((existingPosts) => ({
      ...existingPosts,
      posts: [postData, ...existingPosts.posts]
    }));
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
      
      {/* Check if posts.posts exists and has items */}
      {posts.posts && posts.posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        // Show message if there are no posts
        <p className={classes.noPosts}>No posts yet. Start adding some!</p>
      )}
    </>
  )
  
}

PostList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func
}

export default PostList

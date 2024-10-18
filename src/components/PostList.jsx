import Post from './Post'
import classes from './PostsList.module.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [isFetching, setSsFetching] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      setSsFetching(true)
      const response = await fetch('http://localhost:8080/posts')
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Could not fetch posts.')
      }
      setPosts(data)
      setSsFetching(false)
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
      {/* Check if posts.posts exists and has items */}
      {!isFetching && posts.posts && posts.posts.length > 0 &&(
        <ul className={classes.posts}>
          {posts.posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {!isFetching && posts.posts && posts.posts.length === 0 && (
         // Show message if there are no posts
        <p className={classes.noPosts}>No posts yet. Start adding some!</p>
      )}
      {isFetching && 
        <div>
          <p className={classes.loading}>Loading...</p>
        </div>
      }
    </>
  )
  
}

PostList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func
}

export default PostList

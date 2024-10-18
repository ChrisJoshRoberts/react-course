import Post from './Post'
import classes from './PostsList.module.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const PostList = () => {
  const posts = useLoaderData()

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
      {posts.length > 0 &&(
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
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

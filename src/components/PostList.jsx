import CategoryCard from '../test/CategoryCard'
import Post from './Post'
import classes from './PostsList.module.css'
import PropTypes from 'prop-types'
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
    <div>
      {posts.length > 0 &&(
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul> 
      )}
      <CategoryCard 
      tag="Category"
      title="Nom du partenaire"
      content="Notre partenaire en..."
    /> 
    </div>

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

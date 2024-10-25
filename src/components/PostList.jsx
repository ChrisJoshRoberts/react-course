
import Post from './Post'
import classes from './PostsList.module.css'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'

const PostList = () => {
  const posts = useLoaderData()
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

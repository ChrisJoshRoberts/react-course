import Post from './Post'
import classes from './PostsList.module.css'
import NewPosts from './NewPosts'
import Modal from './Modal'
import PropTypes from 'prop-types'

const PostList = ({isPosting, onStopPosting}) => {
  return (
  <>
    {isPosting && (
      <Modal onClose={onStopPosting}>
        <NewPosts
          onCancel={onStopPosting}
        />
      </Modal>
    )}
    <ul className={classes.posts}>
      
    </ul>
  </>
  )
}

PostList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func
}

export default PostList

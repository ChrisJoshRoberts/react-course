import { MdMessage, MdPostAdd } from 'react-icons/md'
import classes from './MainHeader.module.css'
import PropTypes from 'prop-types'

const MainHeader = ({onCreatePost}) => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <MdMessage color='#fff' size={25} />
        <h1 className={classes.logo}>React Poster</h1>
      </div>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd className={classes.postIcon} size={25}/>
          New Post
        </button>
    </header>
  )
}

MainHeader.propTypes = {
  onCreatePost: PropTypes.func
}


export default MainHeader

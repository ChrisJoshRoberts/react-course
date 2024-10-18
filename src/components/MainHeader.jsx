import { MdMessage, MdPostAdd } from 'react-icons/md'
import classes from './MainHeader.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <MdMessage color='#fff' size={25} />
        <h1 className={classes.logo}>React Poster</h1>
      </div>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd className={classes.postIcon} size={25}/>
          New Post
        </Link>
    </header>
  )
}

MainHeader.propTypes = {
  onCreatePost: PropTypes.func
}


export default MainHeader

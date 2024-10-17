import { MdMessage, MdPostAdd } from 'react-icons/md'
import classes from './MainHeader.module.css'
import PropTypes from 'prop-types'

const MainHeader = ({onCreatePost}) => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <MdMessage size={25} />
        <h1 className={classes.logo}>React Poster</h1>
      </div>
      <p className={classes.buttonContainer}>
        <MdPostAdd size={25}/>
        <button className={classes.button} onClick={onCreatePost}>New Post</button>
      </p>
    </header>
  )
}

MainHeader.propTypes = {
  onCreatePost: PropTypes.func
}


export default MainHeader

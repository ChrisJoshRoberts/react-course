import { MdMessage, MdPostAdd } from 'react-icons/md'
import classes from './MainHeader.module.css'
import PropTypes from 'prop-types'

const MainHeader = ({onCreatePost}) => {
  return (
    <header classname={classes.header}>
      <MdMessage />
      <h1 classname={classes.logo}>React Poster</h1>
      <p>
        <MdPostAdd size={10}/>
        <button className={classes.button} onClick={onCreatePost}>New Post</button>
      </p>
    </header>
  )
}

MainHeader.propTypes = {
  onCreatePost: PropTypes.func
}


export default MainHeader

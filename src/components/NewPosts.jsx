import classes from "./NewPost.module.css"
import PropTypes from "prop-types"


const NewPosts = ({onBodyChange, onAuthorChange, onCancel}) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  onChange={onAuthorChange}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </div>

    </form>
  )
}
NewPosts.propTypes = {
  onBodyChange: PropTypes.func,
  onAuthorChange: PropTypes.func,
  onCancel: PropTypes.func
}
export default NewPosts

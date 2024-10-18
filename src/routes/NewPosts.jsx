import classes from "./NewPost.module.css"
import PropTypes from "prop-types"
import { useState } from "react"
import Modal from "../components/Modal"
import { Link } from "react-router-dom"


const NewPosts = ({onAddPost}) => {
  const [output, setOutput] = useState('')
  const [author, setAuthor] = useState('')
  // Add a function to handle the change of the body input
  function changeBodyHandler(event) {
    setOutput(event.target.value)
  }
  // Add a function to handle the change of the author input
  function changeAuthorHandler(event) {
    setAuthor(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: output,
      author: author,
      id: Math.random().toString()
    }
    onAddPost(postData)
    console.log(postData)
  }
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required  onChange={changeAuthorHandler}/>
        </p>
        <div className={classes.actions}>
          <Link to=".." id="cancelBtn" type="button">Cancel</Link>
          <button>Submit</button>
        </div>
      </form>
    </Modal>
  )
}
NewPosts.propTypes = {
  onCancel: PropTypes.func,
  onAddPost: PropTypes.func
}
export default NewPosts

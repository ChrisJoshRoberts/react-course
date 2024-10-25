import classes from "./NewPost.module.css"
import PropTypes from "prop-types"
import Modal from "../components/Modal"
import { Link, Form, redirect } from "react-router-dom"


const NewPosts = () => {
  return (
    <Modal>
      <Form method='post'className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}  />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <div className={classes.actions}>
          <Link to=".." id="cancelBtn" type="button">Cancel</Link>
          <button>Submit</button>
        </div>
      </Form>
    </Modal>
  )
}
NewPosts.propTypes = {
  onCancel: PropTypes.func,
  onAddPost: PropTypes.func
}
export default NewPosts

export async function action({request}) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('/')
}
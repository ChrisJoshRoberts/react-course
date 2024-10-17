import classes from "./NewPost.module.css"
import { useState } from "react"

const NewPosts = () => {
  const [output, setOutput] = useState('')
  function changeBodyHandler(event) {
    setOutput(event.target.value)
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{output}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  )
}

export default NewPosts
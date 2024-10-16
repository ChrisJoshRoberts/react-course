const Post = (props) => {
  return (
    <div className="post">
      <h1>{props.author}</h1>
      <p>{props.body}</p>
    </div>
  )
}

export default Post
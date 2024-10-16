const Post = (props) => {
  return (
    <div>
      <h2>{props.author}</h2>
      <p>{props.body}</p>
    </div>
  )
}

export default Post
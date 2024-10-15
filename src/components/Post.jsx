const Post = ({name, title}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>By {name}</p>
    </div>
  )
}

export default Post
import Post from './Post'

const PostList = () => {
  return (
    <ul>
      <Post author="John" body="React.js is awesome"/> 
      <Post author="Jane" body="Check out the full course" />
    </ul>
  )
}

export default PostList
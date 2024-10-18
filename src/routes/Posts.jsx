import { Outlet } from 'react-router-dom'
import '../../src/App.css'
import PostList from '../components/PostList'

function Posts() {
  return (
    <>
      <main>
        <PostList />
        <Outlet />
      </main>
    </>
  )
}

export default Posts

export const loader = async () => {
  const response = await fetch('http://localhost:8080/posts')
  const data = await response.json() 
  return data.posts
}
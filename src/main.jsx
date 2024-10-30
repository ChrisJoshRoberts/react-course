import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Posts, { loader as postsLoader } from './routes/Posts.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPosts, {action as newPostAction } from './routes/NewPosts.jsx'
import RootLayout from './routes/RootLayout'
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails'

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, 
    children: [
      {
        path: '/', element:  <Posts />, 
        loader: postsLoader,
        children: [
          {path: '/create-post', element: <NewPosts />, action: newPostAction},
          {path: '/:postId', element: <PostDetails />, loader: postDetailsLoader}
        ]
      }, 
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
)

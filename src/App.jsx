import './App.css'
import PostList from './components/PostList'
import MainHeader from './components/MainHeader'
import { useState } from 'react'

function App() {
    const [modalVisable, setModalVisable] = useState(false)

    // Hide the modal when the backdrop is clicked
  function hideModalHandler() {
    setModalVisable(false)
  }
  function showModalHandler() {
    setModalVisable(true)
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList isPosting={modalVisable} onStopPosting={hideModalHandler} />
      </main>
    </>
  )
}

export default App

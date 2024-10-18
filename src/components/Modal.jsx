import classes from './Modal.module.css'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Modal = ({ children }) => {
  const navigate = useNavigate()
  const closeHandler = () => {
    navigate('..')
  }
  return (
    <>
    <div className={classes.backdrop} onClick={closeHandler}/>
    <dialog open className={classes.modal}>
      {children}
    </dialog>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func
}

export default Modal

import classes from './Modal.module.css'
import PropTypes from 'prop-types'

const Modal = ({ children, onClose }) => {
  return (
    <>
    <div className={classes.backdrop}  onClick={onClose}/>
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

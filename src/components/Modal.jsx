import classes from './Modal.module.css'
import PropTypes from 'prop-types'

const Modal = ({ children }) => {
  return (
    <>
    <div className={classes.backdrop} />
    <dialog open className={classes.modal}>
      {children}
    </dialog>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.node
}

export default Modal
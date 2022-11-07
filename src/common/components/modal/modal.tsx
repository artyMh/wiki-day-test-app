import * as ReactDOM from 'react-dom'

import Button from '../button'

import './modal.css'

type ModalProps = {
  show: boolean
  onCloseButtonClick: () => void
  title: string
  children?: string
}

const Modal = ({ show, onCloseButtonClick, title, children }: ModalProps): JSX.Element | null => {
  if (!show) {
    return null
  }

  const onClose = () => {
    document.body.style.overflowY = 'unset'
    onCloseButtonClick()
  }

  document.body.style.overflowY = 'hidden'

  // TODO: set <body></body> overflow-y: hidden on modal work phase
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-container__modal">
        <div className="modal-container__modal-header">
          <h3>{title}</h3>
        </div>
        <div className="modal-container__modal-body">
          {children}
        </div>
        <div className="modal-container__modal-footer">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
    , document.body
  )
}

export default Modal

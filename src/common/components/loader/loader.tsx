import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import './loader.css'

export type LoaderProps = {
  children: string
}

const Loader = ({ children }: LoaderProps): JSX.Element => (
  <div className="loader-container">
    <FontAwesomeIcon icon={faSpinner} className="spinner" />
    <span className="loader-container__text">{children}</span>
  </div>
)

export default Loader

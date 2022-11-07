import { memo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faInfo, faLink } from '@fortawesome/free-solid-svg-icons'

import { WikiOnThisDayCard } from '../../models/wiki-on-this-day-card'
import noImage from '../../../assets/no-image.png'
import Modal from '../modal'
import './card.css'

export type CardProps = WikiOnThisDayCard

const Card = ({ title, text, year, imageUrl, wikiUrl }: CardProps): JSX.Element => {
  const [ isModalShow, setModalShow ] = useState(false)
  const showModal = () => setModalShow(true)
  const hideModal = () => setModalShow(false)

  const imageSrc = imageUrl !== '' ? imageUrl : noImage

  return (
    <>
      <div className="card-container">
        <img role="img" className="card-container__image" loading="lazy" src={imageSrc} />
        <div className="card-container__content">
          <h3>{title}</h3>
        </div>
        <div className="card-container__info">
          {year ? <h4 className="year"><FontAwesomeIcon icon={faCalendarAlt}/>{year}</h4> : null}
          <h4 className="more-info" onClick={showModal}><FontAwesomeIcon icon={faInfo} />Info</h4>
          <h4 className="wiki-link"><a href={wikiUrl}><FontAwesomeIcon icon={faLink} />Wiki</a></h4>
        </div>
      </div>
      {text ? <Modal title="About" show={isModalShow} onCloseButtonClick={hideModal}>{text}</Modal> : null}
    </>
  )
}

export default memo(Card)

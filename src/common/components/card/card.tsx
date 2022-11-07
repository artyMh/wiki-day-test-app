import { memo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faInfo, faLink } from '@fortawesome/free-solid-svg-icons'

import { WikiOnThisDayCard } from '../../models/wiki-on-this-day-card'
import Modal from '../modal'

import wikipediaLogo from '../../../assets/wikipedia-logo.svg'
import './card.css'

export type CardProps = WikiOnThisDayCard

const Card = ({ title, text, year, imageUrl, wikiUrl }: CardProps): JSX.Element => {
  const [ isModalShow, setModalShow ] = useState(false)
  const showModal = () => setModalShow(true)
  const goToWiki = () => window.open(wikiUrl)

  return (
    <>
      <div className="card-container">
        <img className="card-container__image" loading="lazy" src={imageUrl}/>
        <div className="card-container__content">
          <h3>{title}</h3>
        </div>
        <div className="card-container__info">
          {year ? <h4><FontAwesomeIcon icon={faCalendarAlt}/>{year}</h4> : null}
          <h4 className="more-info" onClick={showModal}><FontAwesomeIcon icon={faInfo}/>Info</h4>
          <h4 className="wiki-link" onClick={goToWiki}><FontAwesomeIcon icon={faLink}/>Wiki</h4>
        </div>
      </div>
      {text ? <Modal title="About" show={isModalShow} onCloseButtonClick={() => setModalShow(false)}>{text}</Modal> : null}
    </>
  )
}

export default memo(Card)

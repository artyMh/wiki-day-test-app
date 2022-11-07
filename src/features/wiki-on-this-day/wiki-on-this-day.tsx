import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faBookDead, faBell, faCheck, faGlassCheers } from '@fortawesome/free-solid-svg-icons'

import type { WikiOnThisDayCards } from '../../common/models/wiki-on-this-day-card'

import Badge from '../../common/components/badge'
import Card from '../../common/components/card'

import './wiki-on-this-day.css'

type SelectedCategory = 'selected' | 'births' | 'deaths' | 'events' | 'holidays'

export type WikiOnThisDayProps = {
  wikiOnThisDayEvents: WikiOnThisDayCards
}

const WikiOnThisDay = ({ wikiOnThisDayEvents }: WikiOnThisDayProps): JSX.Element => {
  const { selected, births, deaths, events, holidays } = wikiOnThisDayEvents
  const [ selectedCategory, setSelectedCategory ] = useState<SelectedCategory>('selected')

  return (
    <div className="wiki-on-this-day-container">
      <div className="wiki-on-this-day-container__categories">
        {selected.length > 0
          ? <Badge isSelected={selectedCategory === 'selected'} onClick={() => setSelectedCategory('selected')}><FontAwesomeIcon icon={faCheck}/>Selected</Badge>
          : null
        }
        {births.length > 0
          ? <Badge isSelected={selectedCategory === 'births'} onClick={() => setSelectedCategory('births')}><FontAwesomeIcon icon={faBirthdayCake} />Births</Badge>
          : null
        }
        {deaths.length > 0
          ? <Badge isSelected={selectedCategory === 'deaths'} onClick={() => setSelectedCategory('deaths')}><FontAwesomeIcon icon={faBookDead} />Deaths</Badge>
          : null
        }
        {events.length > 0
          ? <Badge isSelected={selectedCategory === 'events'} onClick={() => setSelectedCategory('events')}><FontAwesomeIcon icon={faBell} />Events</Badge>
          : null
        }
        {holidays.length > 0
          ? <Badge isSelected={selectedCategory === 'holidays'} onClick={() => setSelectedCategory('holidays')}><FontAwesomeIcon icon={faGlassCheers} />Holidays</Badge>
          : null
        }
      </div>
      <div className="wiki-on-this-day-container__events">
        {wikiOnThisDayEvents[selectedCategory].length > 0 ? (
          <>
            {wikiOnThisDayEvents[selectedCategory].map((event) => (
              <Card
                key={event.title}
                title={event.title}
                text={event.text}
                year={event.year}
                imageUrl={event.imageUrl}
                wikiUrl={event.wikiUrl}
              />
            ))}
          </>
        ) : null}
      </div>
    </div>
  )
}

export default WikiOnThisDay

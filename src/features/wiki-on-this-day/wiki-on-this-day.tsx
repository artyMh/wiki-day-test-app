import { useState } from 'react'
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
  const [ selectedCategory, setSelectedCategory ] = useState<SelectedCategory>('selected')
  const { selected, births, deaths, events, holidays } = wikiOnThisDayEvents

  const setCategory = (category: SelectedCategory) => () => {
    setSelectedCategory(category)
  }

  return (
    <div className="wiki-on-this-day-container">
      <div className="wiki-on-this-day-container__categories">
        {selected.length > 0
          ? <Badge isSelected={selectedCategory === 'selected'} icon={faCheck} onClick={setCategory('selected')}>Selected</Badge>
          : null
        }
        {births.length > 0
          ? <Badge isSelected={selectedCategory === 'births'} icon={faBirthdayCake} onClick={setCategory('births')}>Births</Badge>
          : null
        }
        {deaths.length > 0
          ? <Badge isSelected={selectedCategory === 'deaths'} icon={faBookDead} onClick={setCategory('deaths')}>Deaths</Badge>
          : null
        }
        {events.length > 0
          ? <Badge isSelected={selectedCategory === 'events'} icon={faBell} onClick={setCategory('events')}>Events</Badge>
          : null
        }
        {holidays.length > 0
          ? <Badge isSelected={selectedCategory === 'holidays'} icon={faGlassCheers} onClick={setCategory('holidays')}>Holidays</Badge>
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

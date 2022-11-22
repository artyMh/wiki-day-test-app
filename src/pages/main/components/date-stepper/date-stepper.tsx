

import { processDateDaysHelper } from '../../../../common/helpers/process-date-days-helper'
import { useGlobalStore } from '../../../../common/store/global-store'
import './date-stepper.css'

const DateStepper = (): JSX.Element => {
  const globalStore = useGlobalStore()
  
  const getPrevDateEvents = () => globalStore.getWikiOnThisDay(processDateDaysHelper(globalStore.wikiDate, -1))
  const getNextDateEvents = () => globalStore.getWikiOnThisDay(processDateDaysHelper(globalStore.wikiDate, 1))


  return (
    <div className="date-stepper-container">
      <button onClick={getPrevDateEvents}>Previous date</button>
      <p className="gray-text date-string">
        {globalStore.wikiLocaleDate}
      </p>
      <button onClick={getNextDateEvents}>Next date</button>
    </div>
  )
}

export default DateStepper

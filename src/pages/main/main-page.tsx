import { lazy, Suspense } from 'react'
import { observer } from 'mobx-react-lite'

import { useGlobalStore } from '../../common/store/global-store'
import { FetchState } from '../../common/models/fetch-state'
import Button from '../../common/components/button'
import Loader from '../../common/components/loader'
import Modal from '../../common/components/modal'

import DateStepper from './components/date-stepper'

const WikiOnThisDay = lazy(() => import('../../features/wiki-on-this-day'))

const MainPage = observer((): JSX.Element => {
  const globalStore = useGlobalStore()

  const isFetchError = globalStore.wikiOnThisDayFetchStatus === FetchState.ERROR
  const getData = () => globalStore.getWikiOnThisDay(globalStore.wikiDate)
  const resetData = () => globalStore.resetWikiOnThisDay()

  return (
    <div className="App">
      <h1>Wikipedia&apos;s &quot;On this day&quot;</h1>
      <Modal show={isFetchError} onCloseButtonClick={resetData} title="Ooops">
        An error has occurred during fetch of Wikipedia API
      </Modal>
      <p className="gray-text">
        Today is {globalStore.todayDate}
      </p>
      <DateStepper />
      <p className="gray-text">
        Data from wikipedia official <a className="link" href="https://api.wikimedia.org/wiki/API_reference/Feed/On_this_day">API</a>
      </p>
      {globalStore.wikiOnThisDayFetchStatus === FetchState.IDLE ? <Button onClick={getData}>Load data</Button> : null}
      {globalStore.wikiOnThisDayFetchStatus === FetchState.LOADING ? <Loader>Loading ...</Loader> : null}
      {globalStore.wikiOnThisDayFetchStatus === FetchState.SUCCESS
        ? (
          <Suspense fallback={<Loader>Loading events...</Loader>}>
            <WikiOnThisDay wikiOnThisDayEvents={globalStore.wikiOnThisDayCards}></WikiOnThisDay>
          </Suspense>
        )
        : null}
    </div>
  )
})

export default MainPage

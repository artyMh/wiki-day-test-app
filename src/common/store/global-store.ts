import { makeAutoObservable, runInAction } from 'mobx'
import { createContext, useContext } from 'react'

import WikiApiService from '../services/wiki-api-service'
import { FetchState } from '../models/fetch-state'
import type { WikiOnThisDayResponse } from '../models/wiki-on-this-day-model'
import type { WikiOnThisDayCards } from '../models/wiki-on-this-day-card'
import WikiParseService from '../services/wiki-parse-service'

class GlobalStore {
  wikiOnThisDayFetchStatus = FetchState.IDLE
  wikiOnThisDayResponse!: WikiOnThisDayResponse
  wikiOnThisDayCards!: WikiOnThisDayCards

  constructor() {
    makeAutoObservable(this)
  }

  getWikiOnThisDay = async (month: number, day: number) => {
    this.wikiOnThisDayFetchStatus = FetchState.LOADING
    
    try {
      const res = await WikiApiService.getOnThisDay(month, day)
      this.wikiOnThisDayResponse = res
      runInAction(() => {
        this.wikiOnThisDayFetchStatus = FetchState.SUCCESS
        this.wikiOnThisDayCards = WikiParseService.parseOnThisDay(res)
      })
    } catch (e: unknown) {
      runInAction(() => {
        this.wikiOnThisDayFetchStatus = FetchState.ERROR
      })
      // eslint-disable-next-line no-console
      console.error('Error while fetching from store:', e)
    }
  }

  resetWikiOnThisDay = () => {
    globalStore.wikiOnThisDayFetchStatus = FetchState.IDLE
  }
}

const globalStore = new GlobalStore()

const GlobalStoreContext = createContext<GlobalStore>(globalStore)

export const useGlobalStore = () => {
  return useContext<GlobalStore>(GlobalStoreContext)
}

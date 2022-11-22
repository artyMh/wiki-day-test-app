import { makeAutoObservable, runInAction } from 'mobx'
import { createContext, useContext } from 'react'

import type { WikiOnThisDayResponse } from '../models/wiki-on-this-day-model'
import type { WikiOnThisDayCards } from '../models/wiki-on-this-day-card'

import { FetchState } from '../models/fetch-state'
import WikiApiService from '../services/wiki-api-service'
import WikiParseService from '../services/wiki-parse-service'

class GlobalStore {
  readonly todayDate = new Date().toLocaleString('default', { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' })

  wikiOnThisDayFetchStatus = FetchState.IDLE
  wikiOnThisDayResponse!: WikiOnThisDayResponse
  wikiOnThisDayCards!: WikiOnThisDayCards

  wikiDate = new Date()
  get wikiLocaleDate() {
    return this.wikiDate.toLocaleString('default', { weekday: 'long', day: 'numeric', month: 'long' })
  }

  constructor() {
    makeAutoObservable(this)
  }

  getWikiOnThisDay = async (date: Date) => {
    this.wikiDate = date
    this.wikiOnThisDayFetchStatus = FetchState.LOADING
    const month = date.getMonth() + 1
    const day = date.getDate()

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

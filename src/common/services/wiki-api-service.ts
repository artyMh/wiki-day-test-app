import { WikiOnThisDayResponse } from '../models/wiki-on-this-day-model'
import { mockData } from './mock_data'

export default class WikiApiService {
  static readonly BASE_URL = 'https://api.wikimedia.org/feed/v1'

  static async getOnThisDay(month: number, day: number): Promise<WikiOnThisDayResponse> {
    const url = `${this.BASE_URL}/wikipedia/en/onthisday/all/${month}/${day}`

    try {
      const response = await fetch(url, { cache: 'default' })
      const body = await response.json() as WikiOnThisDayResponse
      console.log('RESPONSE', body)
      return body
    } catch (e) {
      console.error('ERROR', e)
      return {} as WikiOnThisDayResponse
    }
  }

  static async getMockData(): Promise<WikiOnThisDayResponse> {
    return new Promise<WikiOnThisDayResponse>((res) => setTimeout(() => res(mockData), 1000))
  }
}


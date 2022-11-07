export interface WikiDayEventPage {
  type: 'standard' | 'disambiguation' | 'no-extract' | 'mainpage'
  namespace: {
    id: string
    text: string
  }
  wikibase_item: string
  titles: {
    canonical: string
    normalized: string
    display: string
  }
  pageid: number
  thumbnail: {
    source: string
    width: number
    height: number
  }
  originalimage?: {
    source: string
    width: number
    height: number
  }
  lang: string
  dir: string
  revision: string
  tid: string
  timestamp: string
  description: string
  description_source: string
  content_urls: {
    desktop: {
      page: string
      revisions: string
      edit: string
      talk: string
    }
    mobile: {
      page: string
      revisions: string
      edit: string
      talk: string
    }
  }
  extract: string
  extract_html: string
}

export interface WikiDayEvent {
  text: string
  year: number
  pages: WikiDayEventPage[]
}

export interface WikiOnThisDayResponse {
  selected: WikiDayEvent[]
  births: WikiDayEvent[]
  deaths: WikiDayEvent[]
  events: WikiDayEvent[]
  holidays: WikiDayEvent[]
}

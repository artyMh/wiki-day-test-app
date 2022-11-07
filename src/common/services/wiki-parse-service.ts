import { WikiOnThisDayCard, WikiOnThisDayCards } from '../models/wiki-on-this-day-card'
import { WikiDayEvent, WikiOnThisDayResponse } from '../models/wiki-on-this-day-model'

export default class WikiParseService {

  static parseOnThisDay(data: WikiOnThisDayResponse): WikiOnThisDayCards {
    const parsed: WikiOnThisDayCards = {
      selected: this.parseDayEvents(data.selected),
      births: this.parseDayEvents(data.births),
      deaths: this.parseDayEvents(data.deaths),
      events: this.parseDayEvents(data.events),
      holidays: this.parseDayEvents(data.holidays),
    }

    return parsed
  }

  private static parseDayEvents(events: WikiDayEvent[]): WikiOnThisDayCard[] {
    return events
      .filter(event => event.pages.length > 0)
      .map(event => ({ 
        title: event.text,
        text: event.pages[0].extract,
        imageUrl: event.pages[0].originalimage?.source ?? '',
        wikiUrl: event.pages[0].content_urls.desktop.page,
        year: event.year
      } as WikiOnThisDayCard))
      .sort(event => event.year)
  }
}
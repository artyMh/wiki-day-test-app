export interface WikiOnThisDayCard {
  title: string
  text: string
  year: number
  imageUrl: string
  wikiUrl: string
}

export interface WikiOnThisDayCards {
  selected: WikiOnThisDayCard[]
  births: WikiOnThisDayCard[]
  deaths: WikiOnThisDayCard[]
  events: WikiOnThisDayCard[]
  holidays: WikiOnThisDayCard[]
}

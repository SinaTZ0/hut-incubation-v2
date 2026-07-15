import { createContext } from 'react'
import type { EventItem, Mentor, NewsItem, StationedTeam } from '../data/content'

export type NewEvent = Omit<EventItem, 'id'>
export type NewNewsItem = Omit<NewsItem, 'id'>
export type NewStationedTeam = Omit<StationedTeam, 'id'>
export type NewMentor = Omit<Mentor, 'id'>

export type ContentState = {
  events: EventItem[]
  newsItems: NewsItem[]
  stationedTeams: StationedTeam[]
  mentors: Mentor[]
}

export type ContentStoreValue = ContentState & {
  addEvent: (event: NewEvent) => void
  deleteEvent: (id: string) => void
  addNewsItem: (item: NewNewsItem) => void
  deleteNewsItem: (id: string) => void
  addStationedTeam: (team: NewStationedTeam) => void
  deleteStationedTeam: (id: string) => void
  addMentor: (mentor: NewMentor) => void
  deleteMentor: (id: string) => void
}

export const ContentStoreContext = createContext<ContentStoreValue | null>(null)

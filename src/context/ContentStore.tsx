import { useMemo, useReducer, type ReactNode } from 'react'
import {
  events as seededEvents,
  mentors as seededMentors,
  newsItems as seededNewsItems,
  stationedTeams as seededStationedTeams,
} from '../data/content'
import { ContentStoreContext, type ContentState, type ContentStoreValue, type NewEvent, type NewMentor, type NewNewsItem, type NewStationedTeam } from './content-store-context'

type ContentAction =
  | { type: 'add-event'; payload: NewEvent }
  | { type: 'delete-event'; id: string }
  | { type: 'add-news'; payload: NewNewsItem }
  | { type: 'delete-news'; id: string }
  | { type: 'add-team'; payload: NewStationedTeam }
  | { type: 'delete-team'; id: string }
  | { type: 'add-mentor'; payload: NewMentor }
  | { type: 'delete-mentor'; id: string }

function createId() {
  return crypto.randomUUID()
}

function createInitialState(): ContentState {
  return {
    events: seededEvents.map((item) => ({ ...item })),
    newsItems: seededNewsItems.map((item) => ({ ...item })),
    stationedTeams: seededStationedTeams.map((item) => ({ ...item })),
    mentors: seededMentors.map((item) => ({ ...item })),
  }
}

function contentReducer(state: ContentState, action: ContentAction): ContentState {
  switch (action.type) {
    case 'add-event':
      return { ...state, events: [{ id: createId(), ...action.payload }, ...state.events] }
    case 'delete-event':
      return { ...state, events: state.events.filter((item) => item.id !== action.id) }
    case 'add-news':
      return { ...state, newsItems: [{ id: createId(), ...action.payload }, ...state.newsItems] }
    case 'delete-news':
      return { ...state, newsItems: state.newsItems.filter((item) => item.id !== action.id) }
    case 'add-team':
      return { ...state, stationedTeams: [{ id: createId(), ...action.payload }, ...state.stationedTeams] }
    case 'delete-team':
      return { ...state, stationedTeams: state.stationedTeams.filter((item) => item.id !== action.id) }
    case 'add-mentor':
      return { ...state, mentors: [{ id: createId(), ...action.payload }, ...state.mentors] }
    case 'delete-mentor':
      return { ...state, mentors: state.mentors.filter((item) => item.id !== action.id) }
  }
}

export function ContentStoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(contentReducer, undefined, createInitialState)
  const value = useMemo<ContentStoreValue>(() => ({
    ...state,
    addEvent: (payload) => dispatch({ type: 'add-event', payload }),
    deleteEvent: (id) => dispatch({ type: 'delete-event', id }),
    addNewsItem: (payload) => dispatch({ type: 'add-news', payload }),
    deleteNewsItem: (id) => dispatch({ type: 'delete-news', id }),
    addStationedTeam: (payload) => dispatch({ type: 'add-team', payload }),
    deleteStationedTeam: (id) => dispatch({ type: 'delete-team', id }),
    addMentor: (payload) => dispatch({ type: 'add-mentor', payload }),
    deleteMentor: (id) => dispatch({ type: 'delete-mentor', id }),
  }), [state])

  return <ContentStoreContext.Provider value={value}>{children}</ContentStoreContext.Provider>
}

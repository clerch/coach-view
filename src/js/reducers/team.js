import { processEvent, calculateMissed } from './helpers.js'
import gEvents from '../../../test_data/google_events.json';

var googleEvents = gEvents.map((x) => {
  return {
    start: new Date(x.start),
    end: new Date(x.end),
    player: parseInt(x.player)
  }
});

const initialState = {
  playerEvents: [],
  teamEvents: [],
  playerEventsVisible: false,
  teamEventsVisible: false,
  visibleEvents: {
    team: [],
    player: []
  },
  playerList: [],
  addEventType: 'PRACTICE_EVENT',
  season: {
    start: new Date("2016/04/20"),
    end: new Date("2016/08/20")
  },
  dailyWeekly: 'daily',
  settingsVisible: false,
  playerMissedEvents: {}
}

export default function team(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_PLAYER_SCHEDULE':
    console.log(state)

    var visiblePlayers;
    if (state.playerEventsVisible === true) {
        action.id === null
          ? visiblePlayers = state.playerEvents
          : visiblePlayers = state.playerEvents.filter((x) => x.player === action.id)
      } else {
        visiblePlayers = []
      }
      return Object.assign({}, state, {
        visibleEvents: {
          team: state.visibleEvents.team,
          player: visiblePlayers
        }
      })
    case 'ADD_TEAM_EVENT':
    var events = processEvent(action.event,state.dailyWeekly,state.season)
      return Object.assign({}, state, {
        teamEvents: state.teamEvents.concat(events),
        visibleEvents: {
          team: state.teamEventsVisible === true
            ? state.teamEvents.concat(events)
            : [],
          player: state.visibleEvents.player
        }
      })
    case 'TOGGLE_TEAM_EVENTS':
      return Object.assign({}, state, {
        visibleEvents: {
          team: state.teamEventsVisible === true
            ? []
            : state.teamEvents,
          player: state.visibleEvents.player
        },
        teamEventsVisible: !state.teamEventsVisible
      })
    case 'TOGGLE_PLAYER_EVENTS':
      return Object.assign({}, state, {
        visibleEvents: {
          team: state.visibleEvents.team,
          player: state.playerEventsVisible === true
            ? []
            : state.playerEvents
        },
        playerEventsVisible: !state.playerEventsVisible
      })
    case 'GET_PLAYERS':
      return Object.assign({}, state, {
        playerList: state.playerList.concat(action.players)
      })
    case 'GET_PLAYER_CALENDARS':
      return Object.assign({}, state, {
        playerEvents: googleEvents
      })
    case 'CLEAR_PLAYERS':
      return Object.assign({}, state, {
        playerList: []
      })
    case 'SET_ADD_EVENT_TYPE':
      return Object.assign({}, state, {
        addEventType: action.eventType
      })
    case 'TOGGLE_DAILY_WEEKLY':
      return Object.assign({}, state, {
        dailyWeekly: state.dailyWeekly === 'daily' ? 'weekly' : 'daily'
      })
    case 'SETTINGS_VISIBLE':
      return Object.assign({}, state, {
        settingsVisible: action.value
      })
    case 'SET_SEASON':
      return Object.assign({}, state, {
        season: {
          start: action.start === null ? state.season.start : action.start,
          end: action.end === null ? state.season.end : action.end
        }
      })
    case 'CALCULATE_MISSED_EVENTS':
      return Object.assign({}, state, {
        playerMissedEvents: calculateMissed(state.playerEvents,state.teamEvents)
      })
      default:
        return state
  }
}

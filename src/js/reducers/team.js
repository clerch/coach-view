import { processEvent, calculateMissed } from './helpers.js'

const initialState = {
  playerEvents: [],
  teamEvents: [],
  playerEventsVisible: true,
  teamEventsVisible: true,
  visibleEvents: {
    team: [],
    player: []
  },
  playerList: [],
  playerCount: 0,
  playerLoadProgress: 0,
  addEventType: 'PRACTICE_EVENT',
  season: {
    start: new Date("2016/04/20"),
    end: new Date("2016/08/20")
  },
  dailyWeekly: 'daily',
  settingsVisible: false,
  playerMissedEvents: {
    total: 0,
    player: {}
  },
  resources: [],
  resourceWindowOpen: false,
  currentResource: {
    content: null,
    name: null,
    id: null
  },
  snackbarVisible: false,
  snackbarMessage: ''
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
    case 'SET_PLAYER_COUNT':
      return Object.assign({}, state, {
        playerCount: action.count
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
    case 'LOAD_PLAYER_DATA':
      var events = action.data.events.map((x) => {
        return {
          start: new Date(x.start),
          end: new Date(x.end),
          player: action.data.id
        }
      })
      var player = {
        id: action.data.id,
        calId: action.data.id,
        name: action.data.name
      }
      return Object.assign({}, state, {
        playerEvents: state.playerEvents.concat(events),
        playerList: state.playerList.concat(player),
        visibleEvents: {
          player: state.visibleEvents.player.concat(events),
          team: state.visibleEvents.team
        }
      })
      case 'LOAD_TEAM_RESOURCES':
        return Object.assign({}, state, {
          resources: action.resources
        })
      case 'OPEN_RESOURCE_WINDOW':
        return Object.assign({}, state, {
          resourceWindowOpen: true,
          currentResource: action.resource
        })
      case 'CLOSE_RESOURCE_WINDOW':
        return Object.assign({}, state, {
          resourceWindowOpen: false
        })
      case 'SET_CURRENT_RESOURCE':
        return Object.assign({}, state, {
          currentResource: {
            content: action.content ? action.content : state.currentResource.content,
            name: action.name ? action.name : state.currentResource.name,
            id: action.id ? action.id : state.currentResource.id
          }
        })
      case 'CLEAR_CURRENT_RESOURCE':
        return Object.assign({}, state, {
          currentResource: {
            content: null,
            name: null,
            id: null
          }
        })
      case 'UPDATE_RESOURCES':
        return Object.assign({}, state, {
          resources: action.resources
        })
      case 'SHOW_SNACKBAR':
        return Object.assign({}, state, {
          snackbarVisible: true,
          snackbarMessage: action.message

        })
      case 'HIDE_SNACKBAR':
        return Object.assign({}, state, {
          snackbarVisible: false,
          snackbarMessage: ''
        })
      default:
        return state
  }
}

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
  playerList: []
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
      return Object.assign({}, state, {
        teamEvents: state.teamEvents.concat(action.event),
        visibleEvents: {
          team: state.teamEventsVisible === true
            ? state.teamEvents.concat(action.event)
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
      default:
        return state
  }
}

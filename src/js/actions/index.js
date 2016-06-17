export function showPlayerSchedule(id) {
  return {
    type: 'SHOW_PLAYER_SCHEDULE',
    id: id
  }
}

export function addTeamEvent(event) {
  var newEvent = {
    start: event.start,
    end: event.end,
    desc: "TITS",
    title: "TEAM_EVENT"
  }
  return {
    type: 'ADD_TEAM_EVENT',
    event: newEvent
  }
}

export function getPlayers(players) {
  return {
    type: 'GET_PLAYERS',
    players: players
  }
}

export function getPlayerCalendars() {
  return {
    type: 'GET_PLAYER_CALENDARS',
  }
}

export function clearPlayers() {
  return {
    type: 'CLEAR_PLAYERS'
  }
}

export function toggleTeamEvents() {
  return {
    type: 'TOGGLE_TEAM_EVENTS'
  }
}

export function togglePlayerEvents() {
  return {
    type: 'TOGGLE_PLAYER_EVENTS'
  }
}

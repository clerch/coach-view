export function resetAll() {
  return {
    type: 'RESET_ALL'
  }
}

export function showPlayerSchedule(id) {
  return {
    type: 'SHOW_PLAYER_SCHEDULE',
    id: id
  }
}

export function addTeamEvent(event,eventType) {
  var newEvent = {
    start: event.start,
    end: event.end,
    title: eventType
  }
  return {
    type: 'ADD_TEAM_EVENT',
    event: newEvent
  }
}

export function loadTeamEvents(events) {
  return {
    type: 'LOAD_TEAM_EVENTS',
    events: events
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

export function setAddEventType(eventType) {
  return {
    type: 'SET_ADD_EVENT_TYPE',
    eventType: eventType
  }
}

export function toggleDailyWeekly() {
  return {
    type: 'TOGGLE_DAILY_WEEKLY'
  }
}
export function settingsVisible(bool) {
  return {
    type: 'SETTINGS_VISIBLE',
    value: bool
  }
}
export function setSeason(start, end) {
  return {
    type: 'SET_SEASON',
    start: start,
    end: end
  }
}

export function calculateMissedEvents() {
  return {
    type: 'CALCULATE_MISSED_EVENTS'
  }
}

export function setPlayerMissedKeys(players) {
  var playerArray = players.map((x) => x.id)
  return {
    type: 'SET_PLAYER_MISSED_KEYS',
    player_ids: playerArray
  }
}

export function loadPlayerData(player) {
  return {
    type: 'LOAD_PLAYER_DATA',
    data: player
  }
}

export function setPlayerCount(count) {
  return {
    type: 'SET_PLAYER_COUNT',
    count: count
  }
}

export function loadTeamResources(resources) {
  return {
    type: 'LOAD_TEAM_RESOURCES',
    resources: resources
  }
}
export function openResourceWindow(resource) {
  return {
    type: 'OPEN_RESOURCE_WINDOW',
    resource: resource
  }
}
export function closeResourceWindow() {
  return {
    type: 'CLOSE_RESOURCE_WINDOW'
  }
}

export function setCurrentResource(content,name,id) {
  return {
    type: 'SET_CURRENT_RESOURCE',
    content: content,
    name: name,
    id: id
  }
}

export function clearCurrentResource() {
  return {
    type: 'CLEAR_CURRENT_RESOURCE'
  }
}

export function updateResources(resources) {
  return {
    type: 'UPDATE_RESOURCES',
    resources: resources
  }
}

export function showSnackbar(message) {
  return {
    type: 'SHOW_SNACKBAR',
    message: message
  }
}

export function hideSnackbar() {
  return {
    type: 'HIDE_SNACKBAR'
  }
}

export function showPlayerProfile(playerId) {
  return {
    type: 'SHOW_PLAYER_PROFILE',
    playerId: playerId
  }
}

export function hidePlayerProfile() {
  return {
    type: 'HIDE_PLAYER_PROFILE'
  }
}

export function loadPlayerGrades(grades) {
  return {
    type: 'LOAD_PLAYER_GRADES',
    grades: grades
  }
}

// PLAYER

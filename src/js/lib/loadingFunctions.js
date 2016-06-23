import { HOST_NAME } from './constants'

export function loadTeamData(team_id) {
  fetch(HOST_NAME + 'team/' + team_id, {method: 'GET'})
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data)
      this.props.loadTeamResources(data.resources)
      this.props.loadPlayerGrades(data.grades)
      this.props.setPlayerMissedKeys(data.users)
      this.props.setPlayerCount(data.users.filter((x) => x.coach === false).length)
      this.props.setSeason(new Date(data.season_length.start),new Date(data.season_length.end))
      for (var user of data.users) {
        if (user.coach) {
          this.props.setCoachId(user.id)
          getTeamData.bind(this)(user.id)
        } else {
          getPlayerData.bind(this)(user.id)
        }
      }
  }.bind(this))
}
// for player view
export function fetchPlayerData(playerId) {
  fetch(HOST_NAME + 'players/' + playerId, {method: 'GET'})
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      this.props.loadPlayerData(data.player_calendar)
      this.props.loadTeamEvents(data.coach_calendar.events)
      this.props.loadTeamResources(data.resources)
      // this.props.setPlayerMissedKeys(data.users)
      // this.props.setPlayerCount(data.users.filter((x) => x.coach === false).length)
      // this.props.setSeason(new Date(data.season_length.start),new Date(data.season_length.end))
      // for (var player of data.users) {
      //   getUserData.bind(this)(player)
      // }
  }.bind(this))
}

export function getTeamData(coachId) {
  fetch(HOST_NAME + 'players/' + coachId + '/calendar', {method: 'GET'})
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(this)
      this.props.loadTeamEvents(data.events)
      console.log('reloaded team events just fine')
  }.bind(this))
}

// PRIVATE
function getPlayerData(playerId) {
  fetch(HOST_NAME + 'players/' + playerId + '/calendar', {method: 'GET'})
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
      this.props.loadPlayer(data)
      this.props.calculateMissed()
  }.bind(this))
}

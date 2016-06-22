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
      for (var player of data.users) {
        getUserData.bind(this)(player)
      }
  }.bind(this))
}

export function fetchPlayerData(player_id) {
  fetch(HOST_NAME + 'players/' + player_id, {method: 'GET'})
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      this.props.loadPlayerData(data.player_calendar)
      this.props.loadTeamEvents(data.coach_calendar.events)
      // this.props.loadTeamResources(data.resources)
      // this.props.setPlayerMissedKeys(data.users)
      // this.props.setPlayerCount(data.users.filter((x) => x.coach === false).length)
      // this.props.setSeason(new Date(data.season_length.start),new Date(data.season_length.end))
      // for (var player of data.users) {
      //   getUserData.bind(this)(player)
      // }
  }.bind(this))
}

// PRIVATE
function getUserData(player) {
  fetch(HOST_NAME + 'players/' + player.id + '/calendar', {method: 'GET'})
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    if (player.coach) {
    } else {
      this.props.loadPlayer(data)
      this.props.calculateMissed()
    }
  }.bind(this))
}

export function loadUsers(team_id) {
  fetch('http://localhost:3000/team/' + team_id, {method: 'GET'})
    .then(function(res) {
      return res.json();
    })
    .then(function(players) {
      this.props.setPlayerMissedKeys(players)
      this.props.setPlayerCount(players.filter((x) => x.coach === false).length)
      for (var player of players) {
        getUserData.bind(this)(player)
      }
  }.bind(this))
}

export function loadResources(team_id) {
  fetch('http://localhost:3000/team/' + team_id + '/resources', {method: 'GET'})
    .then(function(res) {
      return res.json();
    })
    .then(function(resources) {
      console.log(resources)
      this.props.loadTeamResources(resources)
    }.bind(this))
}

// PRIVATE
function getUserData(player) {
  fetch('http://localhost:3000/user/' + player.id + '/calendar', {method: 'GET'})
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    if (player.coach) {
      console.log(data)
    } else {
      this.props.loadPlayer(data)
      this.props.calculateMissed()
    }
  }.bind(this))
}

export default function loadUsers(team_id) {
  fetch('http://localhost:3000/team/' + team_id, {method: 'GET'})
    .then(function(res) {
      return res.json();
    })
    .then(function(players) {
      this.props.setPlayerMissedKeys(players)
      for (var player of players) {
        getUserData.bind(this)(player)
      }
  }.bind(this))
}

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

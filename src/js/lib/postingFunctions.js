import { HOST_NAME } from './constants'

var headers = new Headers()
headers.append("Content-Type", "application/json")
headers.append("Accept", "application/json")

export function updateResource(resource) {

  var body = {
    name: resource.name,
    content: resource.content,
    resource_type: resource.resource_type
  }
  var options = {
    method:"PUT",
    body: JSON.stringify(body),
    headers: headers
  }

    return fetch(HOST_NAME + "team/" + resource.team_id + "/resources/" + resource.id, options)
}

export function deleteResource(resource) {
  var body = {id: resource.id}
  var options = {
    method:"DELETE",
    body: JSON.stringify(body),
    headers: headers
  }
  return fetch(HOST_NAME + "team/" + resource.team_id + "/resources/" + resource.id, options)
}

export function createResource(resource,teamId) {

  var body = {
    name: resource.name,
    content: resource.content,
    team_id: teamId
  }

  var options = {
    method:"POST",
    body: JSON.stringify(body),
    headers: headers
  }

    return fetch(HOST_NAME + "team/" + teamId + "/resources", options)
}

export function updateSeason(start,end,teamId) {
  console.log(start, end)
  var body = {
    season_start: start.toUTCString(),
    season_end: end.toUTCString(),
    id: teamId
  }

  var options = {
    method:"PUT",
    body: JSON.stringify(body),
    headers: headers
  }

    return fetch(HOST_NAME + "team/" + teamId, options)
}

export function updateTeamCalendar(events,teamId) {
  var options = {
    method:"POST",
    body: JSON.stringify(events),
    headers: headers
  }

  return fetch(HOST_NAME + "team/" + teamId + "/events", options)
}

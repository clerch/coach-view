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

  fetch(HOST_NAME + "team/" + resource.team_id + "/resources/" + resource.id, options)
    .then(function(res){
      if (res.ok){
        return true
      } else {
        return false
      }
    })
}

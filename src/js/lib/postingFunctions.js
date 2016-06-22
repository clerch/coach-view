import { HOST_NAME } from './constants'

export function updateResource(resource) {

  var body = {
    name: resource.name,
    content: resource.content,
    resource_type: resource.resource_type
  }
  var options = {method:"PUT", body: JSON.stringify(body)}

  fetch(HOST_NAME + "team/" + resource.team_id + "/resources/" + resource.id, options)
    .then(function(res){
      if (res.ok){
        console.log('response ok!')
      } else {
        console.log('not ok...')
      }
      console.log(res)
    })
}

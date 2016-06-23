export function cleanModifiedEvents(events) {
  let nonEvents = []
  let cleanEvents = {
    delete: [],
    create: []
  }
  for (var deleteId of events.delete) {
    for (var create of events.create) {
      if (deleteId === create.id) {
        nonEvents.push(deleteId)
      }
    }
  }
  if (nonEvents.length) {
    console.log('cleaning events')
    for (var nonEventId of nonEvents) {
      for (var create of events.create) {
        if (nonEventId !== create.id) {
          cleanEvents.create.push(create)
        }
      }
      for (var deleteId of events.delete) {
        if (nonEventId !== deleteId) {
          cleanEvents.delete.push(deleteId)
        }
      }
    }

    return cleanEvents
  } else {
    return events
  }
}

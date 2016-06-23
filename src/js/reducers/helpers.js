export function processEvent(event,dailyWeekly,season) {
  if (dailyWeekly === 'daily') {
    return event
  } else if (dailyWeekly === 'weekly') {
    let events = []
    let weekLength = 60*60*24*7*1000
    let dayLength = 1000*60*60*24
    let eventStartTime = (event.start.getHours() * 60 * 60 * 1000) + (event.start.getMinutes() * 60 * 1000)
    let eventLength = event.end.getTime() - event.start.getTime()
    let dayOfWeekDif = event.start.getDay() - season.start.getUTCDay()
    let fixedDif = dayOfWeekDif < 0 ? 7 + dayOfWeekDif : dayOfWeekDif
    let firstEvent = season.start.getTime() + (1000*60*60*24*fixedDif) + eventStartTime
    for (let i = firstEvent; i < season.end.getTime() + dayLength; i += weekLength) {
      events.push(
        {
          start: new Date(i),
          end: new Date(i + eventLength),
          title: "Weekly " + event.eventType,
          eventType: event.eventType,
          id: event.id + i
        }
      )
    }
    console.log(event)
    console.log(events)
    return events
  }
}

export function calculateMissed(playerEvents,teamEvents) {
  var missed = {
    total: teamEvents.length,
    player: {}
  }
  for (var tEvent of teamEvents) {
    var missingEvent = {}
    for (var pEvent of playerEvents) {
      // create key for player with count 0 if they don't exist yet
      if (!missed.player[pEvent.player]) {
        missed.player[pEvent.player] = 0
      }
      if (eventsOverlap(pEvent,tEvent) && !missingEvent[pEvent.player]) {
        missed.player[pEvent.player]++
        missingEvent[pEvent.player] = true
      }
    }
  }
  return missed
}

// PRIVATE

function eventsOverlap(pEvent,tEvent) {
  return (tEvent.start.getTime() < pEvent.end.getTime()  &&
  pEvent.start.getTime() < tEvent.end.getTime()) ||
  (pEvent.start.getTime() < tEvent.end.getTime()  &&
  tEvent.start.getTime() < pEvent.end.getTime())
}

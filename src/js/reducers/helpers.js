export function processEvent(event,dailyWeekly,season) {
  if (dailyWeekly === 'daily') {
    return event
  } else if (dailyWeekly === 'weekly') {
    let events = []
    let weekLength = 60*60*24*7*1000
    let dayLength = 1000*60*60*24
    let eventStartTime = (event.start.getHours() * 60 * 60 * 1000) + (event.start.getMinutes() * 60 * 1000)
    let eventLength = event.end.getTime() - event.start.getTime()
    let dayOfWeekDif = event.start.getUTCDay() - season.start.getUTCDay()
    let fixedDif = dayOfWeekDif < 0 ? 7 + dayOfWeekDif : dayOfWeekDif
    let firstEvent = season.start.getTime() + (1000*60*60*24*fixedDif) + eventStartTime
    for (let i = firstEvent; i < season.end.getTime() + dayLength; i += weekLength) {
      events.push(
        {
          start: new Date(i),
          end: new Date(i + eventLength),
          title: 'WEEKLY_' + event.title
        }
      )
    }
    return events
  }
}

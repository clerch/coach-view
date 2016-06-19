export function processEvent(event,dailyWeekly,season) {
  if (dailyWeekly === 'daily') {
    return event
  } else if (dailyWeekly === 'weekly') {
    var events = [event]
    return {
      start: new Date(event.start.getTime() - (60*60*24*7*1000)),
      end: new Date(event.end.getTime() - (60*60*24*7*1000)),
      title: event.title
    }
  }
}

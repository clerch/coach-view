var $ = require('jQuery');

$(function() {
 $('.calendarControlPanel').on('click','.calendarControlButton', function(){
   $(this).toggleClass('pressedCalendarControl')
 })
 $('.calendarControlPanel').on('click','.smallEventControl', function(){
   if ($(this).hasClass('pressedSmallEventControl')) {
    // nothing
   } else{
     $(this).toggleClass('pressedSmallEventControl')
     $(this).siblings().removeClass('pressedSmallEventControl')
     $(this).children().toggleClass('pressedSmallEventControlText')
     $(this).siblings().children().removeClass('pressedSmallEventControlText')
   }
 })
 $('.dailyWeeklyEventToggle').on('click', function() {
   $('.dailyWeeklyEventToggle .weeklyOnOff').toggleClass('weeklyOn')
 })
})

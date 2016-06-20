# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(team_id: 1, coach: true, first_name: "Coach", last_name: "McGee", email: "coachcalendar.app@gmail.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "coachcalendar.app@gmail.com", refresh_token: "1/UuQbTFVlUOBh-alG3u429xiDUvRSsDm4IFnmoYADxuE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player1", last_name: "burns", email: "player1@example.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "9ln223vl0na91ldt43bpvkbfus@group.calendar.google.com", refresh_token: "1/dsOfkB8yWq1SAnC7kdWANJ4MBa3a_WLNRXpjgng0HBE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player2", last_name: "burns", email: "player2@example.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "tuj4rmqq3qet5as2r8p8n7ttvo@group.calendar.google.com", refresh_token: "1/dsOfkB8yWq1SAnC7kdWANJ4MBa3a_WLNRXpjgng0HBE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player3", last_name: "burns", email: "player3@example.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "kpm9t1e4bekkq4s4qjfo5fuj8s@group.calendar.google.com", refresh_token: "1/dsOfkB8yWq1SAnC7kdWANJ4MBa3a_WLNRXpjgng0HBE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player4", last_name: "burns", email: "player4@example.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "5h27sjqm8tiqh89stc6fjd3a0s@group.calendar.google.com", refresh_token: "1/dsOfkB8yWq1SAnC7kdWANJ4MBa3a_WLNRXpjgng0HBE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player5", last_name: "burns", email: "player5@example.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "es850bov5ebci9hm80hfl5i688@group.calendar.google.com", refresh_token: "1/dsOfkB8yWq1SAnC7kdWANJ4MBa3a_WLNRXpjgng0HBE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player6", last_name: "burns", email: "player6@example.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "hbioporg68e78gvhqk57bc2ed0@group.calendar.google.com", refresh_token: "1/dsOfkB8yWq1SAnC7kdWANJ4MBa3a_WLNRXpjgng0HBE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player7", last_name: "burns", email: "player7@example.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "ojgp6p9sabsj9tbpnvui30r5sg@group.calendar.google.com", refresh_token: "1/dsOfkB8yWq1SAnC7kdWANJ4MBa3a_WLNRXpjgng0HBE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player8", last_name: "burns", email: "player8@example.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "uaatl1s69n8qd9sb4e72crjjv0@group.calendar.google.com", refresh_token: "1/dsOfkB8yWq1SAnC7kdWANJ4MBa3a_WLNRXpjgng0HBE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player9", last_name: "burns", email: "player9@example.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "9qn9be450gq7hdjd7q2k9bvkgs@group.calendar.google.com", refresh_token: "1/dsOfkB8yWq1SAnC7kdWANJ4MBa3a_WLNRXpjgng0HBE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player10",last_name: "burns",  email: "player10@example.com", password: "12345", access_token: "askj35895kjadf", calendar_id: "tgijbtj32eem3k47csuaqa0sng@group.calendar.google.com", refresh_token: "1/dsOfkB8yWq1SAnC7kdWANJ4MBa3a_WLNRXpjgng0HBE", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)


Team.create(name: "RazerSharks", created_at: Date.today, updated_at: Date.today)
Team.create(name: "HippoHerd", created_at: Date.today, updated_at: Date.today)

Grade.create(user_id: 1, course: "Math" , assignment_type: "Assignment", grade: 78, created_at: Date.today, updated_at: Date.today)
Grade.create(user_id: 2, course: "Physics", assignment_type: "Midterm", grade: 56, created_at: Date.today, updated_at: Date.today)
Grade.create(user_id: 3, course: "Science", assignment_type: "Final", grade: 81, created_at: Date.today, updated_at: Date.today)
Grade.create(user_id: 4, course: "French", assignment_type: "Midterm", grade: 44, created_at: Date.today, updated_at: Date.today)
Grade.create(user_id: 5, course: "Geography", assignment_type: "Final", grade: 81, created_at: Date.today, updated_at: Date.today)
Grade.create(user_id: 6, course: "Music", assignment_type: "Midterm", grade: 35, created_at: Date.today, updated_at: Date.today)
Grade.create(user_id: 7, course: "Geography", assignment_type: "Final", grade: 81, created_at: Date.today, updated_at: Date.today)
Grade.create(user_id: 1, course: "Science", assignment_type: "Midterm", grade: 99, created_at: Date.today, updated_at: Date.today)
Grade.create(user_id: 2, course: "Calculus", assignment_type: "Final", grade: 81, created_at: Date.today, updated_at: Date.today)
Grade.create(user_id: 1, course: "Math", assignment_type: "Midterm", grade: 44, created_at: Date.today, updated_at: Date.today)
Grade.create(user_id: 2, course: "History", assignment_type: "Final", grade: 33, created_at: Date.today, updated_at: Date.today)

Resource.create(team_id: 1, name: "Workout plan", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor convallis, pellentesque libero a, tempor lorem. Duis volutpat lorem enim, vitae pharetra elit euismod ut. Duis gravida, ipsum non ultricies posuere, sem enim pharetra eros, a malesuada lorem nulla id nulla. Cras egestas, elit id porttitor ornare, turpis urna sagittis lectus, ut feugiat purus sem ut turpis. Sed quis consectetur ex. Ut ut eros nec justo gravida condimentum ac in nunc. Donec et eros sed mauris sodales tristique. Integer nec ipsum neque.

Aenean at lectus vehicula, maximus massa nec, convallis enim. Integer metus nunc, dictum ut dolor sed, ullamcorper semper mauris. Nulla facilisi. Quisque tempor leo nec lacinia porta. Praesent efficitur maximus urna ut pulvinar. Sed pellentesque turpis nec ante commodo laoreet. Ut ut placerat elit. Aenean sagittis in justo et gravida. Curabitur lacinia mi nec dolor egestas, ac porttitor orci pharetra. Pellentesque placerat at dui quis ornare.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, name: "Defensive plays", resource_type: "workout schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et vulputate lorem. Mauris vel tortor sodales, mollis turpis id, aliquet enim. Morbi pharetra felis ac dui molestie, quis pretium lacus scelerisque. Mauris malesuada, sem eu vehicula tincidunt, nulla orci imperdiet nunc, ac eleifend tellus purus id justo. Aenean sagittis, augue quis condimentum mollis, enim nisl gravida nibh, interdum faucibus tellus mauris at enim. Donec venenatis neque tristique lacus laoreet viverra. Nam viverra est odio, non varius elit tincidunt a. Aenean gravida mauris in nunc varius sagittis.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, name: "Offensive plays", resource_type: "workout schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, name: "Meeting notes", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, name: "Game prep", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, name: "Required equipment list", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, name: "Team roster", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, name: "Contact list", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, name: "Workout plan", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, name: "Defensive plays", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, name: "Offensive plays", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, name: "Team roster", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, name: "Contact list", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nisl ut ligula varius tristique. Etiam cursus tellus id felis tempor, sed varius quam auctor. Pellentesque finibus vel quam non vestibulum. Praesent euismod finibus lorem, sit amet fringilla metus. Integer elementum ut tellus in molestie. Aliquam euismod ex a nunc commodo, eget dignissim lorem porta. Integer convallis ante quis lorem tincidunt, quis pharetra erat imperdiet. Duis non mi vel tortor blandit ornare. Nullam lacinia ipsum nec maximus tincidunt. Nulla malesuada at orci eu convallis. Praesent sapien neque, posuere at eros ac, sollicitudin tincidunt nisi. Quisque urna nisi, hendrerit vel est posuere, facilisis placerat erat. Donec ullamcorper enim elit, sit amet consequat enim feugiat in. Praesent placerat, orci eget condimentum ullamcorper, sapien arcu rutrum augue, id dapibus ante erat ac ante. Phasellus lacinia ultrices purus, id ullamcorper augue rutrum at.", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, name: "Game prep", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac ligula scelerisque, fermentum sapien nec, volutpat sapien. Donec facilisis accumsan tincidunt. Duis vehicula ligula ac sodales suscipit. Cras mollis nibh ac faucibus ornare. Ut tempor vulputate facilisis. Phasellus et sodales nisl, ut feugiat libero. Integer commodo nulla et posuere cursus. Nam interdum velit nec massa hendrerit rutrum.

Vivamus volutpat varius felis, sit amet consectetur ante congue vitae. Aenean ac rhoncus ipsum. Sed lobortis sapien finibus, venenatis sapien vel, blandit velit. Nullam placerat, eros in pretium placerat, elit est hendrerit tellus, vitae sodales eros augue sed ipsum. Morbi pharetra nibh eu pellentesque varius. Proin non suscipit tortor. Praesent fringilla at urna a tincidunt. Sed nec velit orci. Donec aliquam odio ut tincidunt ornare. Donec risus libero, mollis eu quam elementum, lacinia interdum nunc. Integer vulputate suscipit diam sit amet tincidunt. Suspendisse lorem elit, sagittis in gravida sit amet, finibus nec justo. Proin semper luctus est, eu gravida leo hendrerit mattis. Morbi pretium, leo eget imperdiet blandit, nibh dui accumsan leo, vel tincidunt eros velit sed tortor. Fusce et nisi et lacus molestie commodo.

", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 3, name: "Required equipment list", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac ligula scelerisque, fermentum sapien nec, volutpat sapien. Donec facilisis accumsan tincidunt. Duis vehicula ligula ac sodales suscipit. Cras mollis nibh ac faucibus ornare. Ut tempor vulputate facilisis. Phasellus et sodales nisl, ut feugiat libero. Integer commodo nulla et posuere cursus. Nam interdum velit nec massa hendrerit rutrum.

Vivamus volutpat varius felis, sit amet consectetur ante congue vitae. Aenean ac rhoncus ipsum. Sed lobortis sapien finibus, venenatis sapien vel, blandit velit. Nullam placerat, eros in pretium placerat, elit est hendrerit tellus, vitae sodales eros augue sed ipsum. Morbi pharetra nibh eu pellentesque varius. Proin non suscipit tortor. Praesent fringilla at urna a tincidunt. Sed nec velit orci. Donec aliquam odio ut tincidunt ornare. Donec risus libero, mollis eu quam elementum, lacinia interdum nunc. Integer vulputate suscipit diam sit amet tincidunt. Suspendisse lorem elit, sagittis in gravida sit amet, finibus nec justo. Proin semper luctus est, eu gravida leo hendrerit mattis. Morbi pretium, leo eget imperdiet blandit, nibh dui accumsan leo, vel tincidunt eros velit sed tortor. Fusce et nisi et lacus molestie commodo.

", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 3, name: "Meeting notes", resource_type: "training schedule", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac ligula scelerisque, fermentum sapien nec, volutpat sapien. Donec facilisis accumsan tincidunt. Duis vehicula ligula ac sodales suscipit. Cras mollis nibh ac faucibus ornare. Ut tempor vulputate facilisis. Phasellus et sodales nisl, ut feugiat libero. Integer commodo nulla et posuere cursus. Nam interdum velit nec massa hendrerit rutrum.

Vivamus volutpat varius felis, sit amet consectetur ante congue vitae. Aenean ac rhoncus ipsum. Sed lobortis sapien finibus, venenatis sapien vel, blandit velit. Nullam placerat, eros in pretium placerat, elit est hendrerit tellus, vitae sodales eros augue sed ipsum. Morbi pharetra nibh eu pellentesque varius. Proin non suscipit tortor. Praesent fringilla at urna a tincidunt. Sed nec velit orci. Donec aliquam odio ut tincidunt ornare. Donec risus libero, mollis eu quam elementum, lacinia interdum nunc. Integer vulputate suscipit diam sit amet tincidunt. Suspendisse lorem elit, sagittis in gravida sit amet, finibus nec justo. Proin semper luctus est, eu gravida leo hendrerit mattis. Morbi pretium, leo eget imperdiet blandit, nibh dui accumsan leo, vel tincidunt eros velit sed tortor. Fusce et nisi et lacus molestie commodo.

", created_at: Date.today, updated_at: Date.today)





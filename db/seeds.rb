# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(team_id: 1, coach: false, first_name: "player1", last_name: "burns", email: "player1@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player2", last_name: "burns", email: "player2@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player3", last_name: "burns", email: "player3@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: true, first_name: "player4", last_name: "burns", email: "player4@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player5", last_name: "burns", email: "player5@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 1, coach: false, first_name: "player6", last_name: "burns", email: "player6@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 2, coach: false, first_name: "player7", last_name: "burns", email: "player7@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 2, coach: true, first_name: "player8", last_name: "burns", email: "player8@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 2, coach: false, first_name: "player9", last_name: "burns", email: "player9@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)
User.create(team_id: 2, coach: false, first_name: "player10",last_name: "burns",  email: "player10@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: Date.today + 10, created_at: Date.today, updated_at: Date.today)


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

Resource.create(team_id: 1, resource_type: "training schedule", content: "lunges", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, resource_type: "workout schedule", content: "swim 1000m", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, resource_type: "workout schedule", content: "early morning run", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, resource_type: "training schedule", content: "100 pushups", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, resource_type: "training schedule", content: "lunges", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, resource_type: "training schedule", content: "swim 1000m", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, resource_type: "training schedule", content: "lunges", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 1, resource_type: "training schedule", content: "lunges", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, resource_type: "training schedule", content: "swim 1000m", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, resource_type: "training schedule", content: "lunges", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, resource_type: "training schedule", content: "swim 1000m", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, resource_type: "training schedule", content: "lunges", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, resource_type: "training schedule", content: "swim 1000m", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 2, resource_type: "training schedule", content: "lunges", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 3, resource_type: "training schedule", content: "swim 1000m", created_at: Date.today, updated_at: Date.today)
Resource.create(team_id: 3, resource_type: "training schedule", content: "lunges", created_at: Date.today, updated_at: Date.today)





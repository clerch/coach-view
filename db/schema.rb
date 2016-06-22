# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160622004743) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "grades", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "course"
    t.string   "assignment_type"
    t.integer  "grade"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "notifications", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "notification_text"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "content"
    t.boolean  "read"
  end

  create_table "resources", force: :cascade do |t|
    t.integer  "team_id"
    t.string   "resource_type"
    t.string   "content"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "name"
  end

  create_table "teams", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.date     "season_start"
    t.date     "season_end"
  end

  create_table "users", force: :cascade do |t|
    t.integer  "team_id"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password"
    t.string   "access_token"
    t.string   "refresh_token"
    t.date     "token_expiry_date"
    t.boolean  "coach"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "calendar_id"
  end

end

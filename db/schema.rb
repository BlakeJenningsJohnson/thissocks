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

ActiveRecord::Schema.define(version: 20140113230145) do

  create_table "socks", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "size"
    t.string   "color"
    t.string   "distinguishing_markings"
    t.string   "status"
  end

  create_table "visitors", force: true do |t|
    t.string   "ip_address"
    t.integer  "page_visits",     default: 0
    t.datetime "last_visit"
    t.boolean  "mobile"
    t.string   "http_user_agent"
    t.integer  "socks_found"
    t.integer  "socks_lost"
    t.integer  "session_time"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

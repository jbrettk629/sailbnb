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

ActiveRecord::Schema.define(version: 2018_10_17_015709) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "boats", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "title", limit: 60, null: false
    t.string "location", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.text "description", null: false
    t.integer "rate", null: false
    t.integer "guests", null: false
    t.integer "bedrooms", null: false
    t.integer "beds", null: false
    t.integer "baths", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_boats_on_owner_id"
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "boat_id", null: false
    t.integer "user_id", null: false
    t.date "checkin", null: false
    t.date "checkout", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "guests", null: false
    t.index ["boat_id"], name: "index_bookings_on_boat_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "boat_id", null: false
    t.float "overall", null: false
    t.float "accuracy"
    t.float "communication"
    t.float "location"
    t.float "checkin"
    t.float "cleanliness"
    t.float "value"
    t.text "description", null: false
    t.integer "booking_id", null: false
    t.index ["boat_id"], name: "index_reviews_on_boat_id"
    t.index ["booking_id"], name: "index_reviews_on_booking_id", unique: true
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end

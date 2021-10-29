# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_21_214736) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friends", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.string "email"
    t.string "phone_number"
    t.string "birthdate"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_friends_on_user_id"
  end

  create_table "gifts", force: :cascade do |t|
    t.string "category"
    t.string "brand_name"
    t.string "brand_url"
    t.string "item_name"
    t.text "description"
    t.integer "price"
    t.string "gift_url"
    t.integer "likes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "gift_id", null: false
    t.string "receiver_email"
    t.string "receiver_phone_number"
    t.integer "quantity"
    t.text "receiver_name"
    t.text "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["gift_id"], name: "index_orders_on_gift_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "gift_id"
    t.integer "user_id"
    t.bigint "order_id", null: false
    t.string "content"
    t.integer "ratings"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["order_id"], name: "index_reviews_on_order_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "user_name"
    t.string "email"
    t.string "phone_number"
    t.string "birthdate"
    t.string "img_url"
    t.string "password_digest"
    t.boolean "admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "friends", "users"
  add_foreign_key "orders", "gifts"
  add_foreign_key "orders", "users"
  add_foreign_key "reviews", "orders"
end

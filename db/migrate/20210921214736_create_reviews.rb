class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :gift_id
      t.integer :user_id
      t.belongs_to :order, null: false, foreign_key: true
      t.string :content
      t.integer :ratings

      t.timestamps
    end
  end
end
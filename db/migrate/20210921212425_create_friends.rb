class CreateFriends < ActiveRecord::Migration[6.1]
  def change
    create_table :friends do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :email
      t.string :phone_number
      t.string :birthdate
      t.string :img_url

      t.timestamps
    end
  end
end

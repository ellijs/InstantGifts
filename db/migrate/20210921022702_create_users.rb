class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :user_name
      t.string :email
      t.string :phone_number
      t.string :birthdate
      t.string :img_url
      t.string :password_digest
      t.boolean :admin

      t.timestamps
    end
  end
end


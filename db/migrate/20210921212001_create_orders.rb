class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :gift, null: false, foreign_key: true
      t.string :receiver_email
      t.string :receiver_phone_number
      t.integer :quantity
      t.text :receiver_name
      t.text :message

      t.timestamps
    end
  end
end
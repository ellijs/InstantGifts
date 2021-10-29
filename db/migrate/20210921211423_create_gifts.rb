

class CreateGifts < ActiveRecord::Migration[6.1]
  def change
    create_table :gifts do |t|
      t.string :category
      t.string :brand_name
      t.string :brand_url
      t.string :item_name
      t.text :description
      t.integer :price
      t.string :gift_url
      t.integer :likes

      t.timestamps
    end
  end
end


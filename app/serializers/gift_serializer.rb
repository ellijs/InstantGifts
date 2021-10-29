class GiftSerializer < ActiveModel::Serializer
  attributes :id, :category, :brand_name, :brand_url, :item_name, :description, :price, :gift_url, :likes, :most_liked_gifts 
  has_many :reviews
end

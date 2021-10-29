class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :order_id, :gift_id, :ratings, :content, :who_wrote_comment, :user_img
  has_one :gift
end

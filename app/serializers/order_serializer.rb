class OrderSerializer < ActiveModel::Serializer
  attributes :id, :gift_id, :user_id, :receiver_name, :receiver_email, :receiver_phone_number, :quantity, :message, :created_at
  has_one :user
  has_one :gift
  has_one :review
end

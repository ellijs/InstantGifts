class FriendSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :birthdate, :img_url
  has_one :user
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_name, :email, :phone_number, :birthdate, :img_url, :password_digest, :admin, :recent_orders

  # has_many :orders
  has_many :friends

end

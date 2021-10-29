class User < ApplicationRecord
    has_secure_password
    validates :user_name, presence: true, uniqueness: true  
    validates :email, presence: true, uniqueness: true
    
    has_many :orders, dependent: :destroy
    has_many :gifts, through: :orders
    has_many :friends
    has_many :reviews

    def recent_orders 
        self.orders.order(created_at: :desc)
      end
end

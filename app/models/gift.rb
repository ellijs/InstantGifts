class Gift < ApplicationRecord
    has_many :orders, dependent: :destroy
    has_many :users, through: :orders
    has_many :reviews

    def most_liked_gifts 
        Gift.all.order(likes: :desc)
    end
end

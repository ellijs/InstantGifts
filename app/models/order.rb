class Order < ApplicationRecord
  belongs_to :user
  belongs_to :gift
  has_one :review

end

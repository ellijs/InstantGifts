class Review < ApplicationRecord
  belongs_to :gift
  belongs_to :user
  belongs_to :order

  def who_wrote_comment 
    writer = User.find(self.user_id)
    writer.user_name
  end

  def user_img
    writer = User.find(self.user_id)
    writer.img_url
  end
end

class GiftsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def show
        gift = Gift.find_by(id: params[:id])
        render json: gift, status: :ok
    end

    def index
        gifts = Gift.all
        render json: gifts, status: :ok
    end

    def create
        gift = @current_user.gifts.create!(gift_params)
        render json: gift, status: :created
    end

    def update
        gift = Gift.find(params[:id])
        gift.update!(gift_params)
        render json: gift, status: :accepted
    end

    def destroy
        gift = Gift.find(params[:id])
        gift.destroy
        head :no_content, status: :deleted
    end

    def increment_likes
        gift = Gift.find(params[:id])
        gift.update!(likes: gift.likes + 1)
        render json: gift, status: :accepted
    end

    def decrement_likes
        gift = Gift.find(params[:id])
        gift.update!(likes: gift.likes - 1)
        render json: gift, status: :accepted
    end

    private

    def gift_params
        params.permit(:category, :id, :brand_name, :brand_url, :item_name, :description, :price, :gift_url, :likes)
    end

end

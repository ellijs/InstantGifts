class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def show
        review = Review.find_by(id: params[:id])
        render json: review, status: :ok
    end

    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :accepted
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content, status: :deleted
    end

    private

    def review_params
        params.permit(:gift_id, :order_id, :content, :user_id, :ratings)
    end

end

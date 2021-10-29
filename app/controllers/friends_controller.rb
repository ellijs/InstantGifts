class FriendsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    wrap_parameters format: []

    def show
        friend = Friend.find_by(id: params[:id])
        render json: friend, status: :ok
    end

    def index
        friends = Friend.all
        render json: friends, status: :ok
    end

    def create
        friend = @current_user.friends.find_or_create_by!(friend_params)
        render json: @current_user, status: :created
    end

    def update
        friend = Friend.find(params[:id])
        friend.update!(friend_params)
        render json: @current_user, status: :accepted
    end

    def destroy
        friend = Friend.find(params[:id])
        friend.destroy
        head :no_content, status: :deleted
    end

    private

    def friend_params
        params.permit(:user_id, :name, :email, :phone_number, :birthdate, :img_url, :id)
    end

end

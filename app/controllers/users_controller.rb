class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :update]
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        render json: @current_user
    end

    def update
        user = User.find(user_params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content, status: :deleted
    end

    private

    def user_params
        params.permit(:id, :user_name, :password, :password_confirmation, :img_url, :phone_number, :name, :birthdate, :email, :admin)
    end  
end

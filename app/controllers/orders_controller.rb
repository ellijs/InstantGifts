class OrdersController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def show
        order = Order.find_by(id: params[:id])
        render json: order, status: :ok
    end

    def index
        orders = Order.all.order(created_at: :desc)
        render json: orders, status: :ok
    end

    def create
        order = @current_user.orders.create!(order_params)
        # friend = @current_user.friends.find_or_create_by!(user_id: @current_user.id, email: order_params[:receiver_email], name: order_params[:receiver_name], phone_number: order_params[:receiver_phone_number])
        render json: @current_user, status: :created
    end

    def update
        order = Order.find(params[:id])
        order.update!(order_params)
        render json: order, status: :accepted
    end

    def destroy
        order = Order.find(params[:id])
        order.destroy
        head :no_content, status: :deleted
    end

    private

    def order_params
        params.permit(:user_id, :gift_id, :receiver_name, :receiver_email, :receiver_phone_number, :quantity, :message)
    end

end

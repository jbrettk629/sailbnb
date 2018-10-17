class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)

    @booking.user_id ||= current_user.id

    if @booking.save
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def show
    @booking = Booking.find(params[:id])
    render :show
  end

  def index
    @user = User.find(current_user.id)
    # @boat = Boat.find(params[:boat_id])
    @bookings = @user.bookings

    render :index
  end

  def booking_params
    params.require(:booking).permit(:boat_id, :user_id, :checkin, :checkout, :guests, :review_id, photos: [])
  end



end

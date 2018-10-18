class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)

    if current_user
      @booking.user_id ||= current_user.id
    else
      @booking.errors[:booking] << ': you must be signed in to book!'
    end


    if @booking.save
      review = Review.new({booking_id: @booking.id, overall: 3, description:'add description here'})
      review.save!
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

    @bookings = @user.bookings

    render :index
  end

  def booking_params
    params.require(:booking).permit(:boat_id, :user_id, :checkin, :checkout, :guests, :review_id)
  end



end

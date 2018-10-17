class Api::ReviewsController < ApplicationController

  def create

    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def index
    @boat = Boat.find(params[:boat_id])
    @reviews = @boat.reviews
    render :index
  end

  def destroy
  end

  def review_params
    params.require(:review).permit(:boat_id, :booking_id, :overall, :description)
  end

end

# :accuracy, :communication, :cleanliness, :location, :checkin, :value,

class Api::ReviewsController < ApplicationController

  def create

    @review = Review.new(review_params)
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

  def update
    @review = Review.find(params[:id])

    if @review.update_attributes(review_params)
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def review_params
    params.require(:review).permit(:booking_id, :overall, :description)
  end

end

# :accuracy, :communication, :cleanliness, :location, :checkin, :value,

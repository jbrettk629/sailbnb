class Api::BoatsController < ApplicationController

  def create
    @boat = Boat.new(boat_params)

    if @boat.save
      render :show
    else
      render json: @boat.errors.full_messages, status: 400
    end
  end


  def show
    debugger
    @boat = Boat.find(params[:id])
    render :show
  end

  def index

    @boats = Boat.all
    render :index
  end

  private

  def boat_params
    params.require(:boat).permit(:owner_id, :title, :description, :lat, :lng, :location, :rate, :guests, :bedrooms, :beds, :baths, :photos [])
  end

end

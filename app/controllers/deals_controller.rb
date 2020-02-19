class DealsController < ApplicationController
  def index
    @deals = Deal.all
    render json: @deals
  end

  def show
    @deal = Deal.find(params[:id])
    render json: @deal
  end
  
  def create
    @deal = Deal.create(deal_params)
    render json: @deal
  end



  private

  def post_params
    params.permit(:date, :deal_name, :description, :price, :location)
  end
end

class DealsController < ApplicationController
  def index
    @deals = Deal.all
    render json: @deals
  end

  def show
    @deal = Deal.find(params[:id])
    render json: @deal
  end
end

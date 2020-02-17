class DealsController < ApplicationController

  def index
    @deals = Deal.all
    render json: @deals
  end

  def show
    respond_with Deal.find(params[:id])
  end
end

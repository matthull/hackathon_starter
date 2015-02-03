class ClientsController < ApplicationController
  def create
    @client = Client.new
    @client.update_attributes! client_params
    render json: @client
  end

  protected

  def client_params
    params.require(:client).permit(:first_name, :last_name, :nickname, :email)
  end

end

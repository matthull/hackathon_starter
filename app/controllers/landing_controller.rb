class LandingController < ApplicationController
  def show
    @client = Client.new
  end

end

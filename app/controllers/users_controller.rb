class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = current_user
    @rentals = @user.rentals
    @votes = @user.votes
  end

  def edit
    @user = User.find(params[:id])
  end
end

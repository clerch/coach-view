class TeamController < ApplicationController

skip_before_filter :verify_authenticity_token

  def show
    @team = Team.find(1) #params[:id] - hard coded
    @users = @team.show_users

    render :json => @users

  end
end

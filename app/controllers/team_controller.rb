class TeamController < ApplicationController

skip_before_filter :verify_authenticity_token

  def show
    team = Team.find(1) #params[:id] - hard coded
    users = team.show_users
    resources = team.resources
    


    render :json => @users

  end
end


# get notifications
# season length
# resources
# player list
# grades
# season length to the database

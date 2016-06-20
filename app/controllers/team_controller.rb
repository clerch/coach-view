class TeamController < ApplicationController

skip_before_filter :verify_authenticity_token

  def index


  end

  def show
    @team = Team.find(1) #params[:id] - hard coded
    # @resources = @team.resources.order(updated_at: :asc)
    # @players = @team.users.where(coach: false)
    # @coach = @team.users.where(coach: true)

    # @data = get_team_schedule(@players)

    @users = @team.show_users

    render :json => @users

  end

  

end

class TeamController < ApplicationController

skip_before_filter :verify_authenticity_token

  def show
    team = Team.find(1) #params[:id] - hard coded
    members = team.show_users
    resources = team.resources
    data = {
      users: team.show_users,
      resources: team.resources.order(created_at: :desc),
      grades: team.show_grades.order(created_at: :desc),
      season_length: {start: team.season_start, end: team.season_end},
      notifications: team.show_coach_notifications
    }


    render :json => data

  end

  def update
    team = Team.find(params[:id])
    team.update(
      season_start: params[:start],
      season_end: params[:end]
      )
    render :nothing => true, :status => 200


  end



end



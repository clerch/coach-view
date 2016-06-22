class TeamController < ApplicationController

skip_before_filter :verify_authenticity_token

  def show
    team = Team.find(1) #params[:id] - hard coded
    members = team.show_users
    resources = team.resources
    data = {
      users: team.show_users,
      resources: team.resources.order(created_at: :desc),
      grades: team.show_grades.flatten,
      season_length: {start: team.season_start, end: team.season_end},
      notifications: team.show_coach_notifications
    }


    render :json => data

  end

  def update
    team = Team.find(params[:id])
    team.update(
      season_start: params[:season_start],
      season_end: params[:season_end]
    )
    if team.persisted?
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 500
    end

  end
end

class TeamController < ApplicationController

skip_before_filter :verify_authenticity_token

  def show
    team = Team.find(1) #params[:id] - hard coded
    members = team.show_users
    resources = team.resources
    data = {
      users: team.show_users,
      resources: team.resources,
      grades: team.show_grades,
      season_length: {start: team.season_start, end: team.season_end},
      notifications: team.show_coach_notifications
    }


    render :json => data

  end
end


# get notifications
# season length
# resources - done
# player list - done
# grades - done
# season length to the database

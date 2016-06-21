class PlayersController < ApplicationController

skip_before_filter :verify_authenticity_token

  def index
    player = User.find(params[:id]) #params[:id] - hard coded
    resources = Resource.find(@player.team_id)
    classes = Classes.find(params[:id])
    # coach calendar
    # user calendar
    # grades

    @data = {
      team_id: player.team_id,
      name: player.full_name,
      resources: resources,
      classes: classes

    }


    render :json => @data

  end
end



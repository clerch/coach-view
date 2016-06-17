class TeamController < ApplicationController


  def index


  end

  def show

    # res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
    # res.header('Access-Control-Allow-Methods', 'GET');
    @team = Team.find(params[:id])
    @resources = @team.resources.order(updated_at: :asc)
    @players = @team.users.where(coach: false)
    @coach = @team.users.where(coach: true)

    @data = []

    @players.each do |players|
      data << {
        name: player.name
        id: player.id
        events: player.get_calendar
      }

    render :json => @data

  end






end

class TeamController < ApplicationController


  def index


  end

  def show
    @team = Team.find(params[:id])
    @resources = @team.resources.order(updated_at: :asc)
    @players = @team.users.where(coach: false)
    @coach = @team.users.where(coach: true)






    
  end






end

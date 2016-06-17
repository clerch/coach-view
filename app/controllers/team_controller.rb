class TeamController < ApplicationController


  def index


  end

  def show
    @team = Team.find(params[:id])
  end






end

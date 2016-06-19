class ResourceController < ApplicationController


  def index
    @team = Team.find(1) 
    @resources = @team.resources.order(updated_at: :asc)  

    render :json => @resources
  end


  def show
    
  end


  def create

  end


  def edit

  end


  def destroy

  end
























end

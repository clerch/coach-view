class ResourcesController < ApplicationController

skip_before_filter :verify_authenticity_token



  def index
    team = Team.find(params[:team_id])
    resources = team.resources.order(created_at: :asc)
    render :json => resources
  end

  def new
    resource = Resource.new

    render :json => resource
  end

  def show
    resource = Resource.find(params[:id])

    render :json => resource
  end

  def create

    resource = Resource.new(resource_params)
    if resource.save
      players = User.where("team_id = ? AND coach = ?", params[:team_id], false)
      players.each do |player|
        Notification.create(
          user_id: player.id,
          notification_text: "The #{params[:name]} resource was posted.",
          content: "resource",
          read: false
        )
      end
      render :status => 200, :json => {:id => resource.id }
    end
  end

  def edit
    resource = Resource.find(params[:id])
  end

  def update
    resource = Resource.find(params[:id])
    resource.update(
      resource_type: params[:resource_type],
      content: resource,
      name: params[:name]
    )
    render :nothing => true, :status => 200
  end


  def destroy
    resource = Resource.find(params[:id])
    resource.destroy

    render :nothing => true, :status => 200
  end



protected

  def resource_params
    params.require(:resource).permit(
    :resource_type,
    :content,
    :team_id,
    :name
  )
  end


end

class ResourcesController < ApplicationController


  def index
    @team = Team.find(1) # This is hard coded.
    @resources = @team.resources.order(updated_at: :asc)
    render :json => @resources
  end

  def new
    @resource = Resource.new

    render :json => @resource
  end

  def show
    @resource = resource(params[:id])

    render :json => @resource
  end

  def create
    @resource = Resource.new(resource_params)

    if @resource.save
      redirect_to team_resources_path, notice: "#{resource_type} was successfully added for the team."
    else
      render :new
    end
  end

  def edit
    @resource = Resource.find(params[:id])
  end

  def update
    @resource = Resource.find(params[:id])
    @resource = Resource.update(
      resource_type: params[:resource_type],
      content: params[:content],
      name: params[:name]
    )    
  end


  def destroy
    @resource = Resource.find(params[:id])
    @resource.destroy
    redirect_to team_resources_path
  end



protected

  def resource_params
    params.require(:resource).permit(
    :resource_type,
    :content,
    :team_id
  )
  end


end

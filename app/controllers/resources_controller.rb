class ResourceController < ApplicationController


  def index
    @team = Team.find(1) 
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
      redirect_to resource_path, notice: "#{resource_type} was successfully added for the team."
    else
      render :new
    end
  end

  def edit
    @resource = Resource.find(params[:id])

    render :json => @resource
  end


  def destroy
    @resource = Resource.find(params[:id])
    @movie.destroy
    redirect_to resources_path
  end



protected

  def resource_params
    params.require(:resource).permit(
    :resource_type, :content
  )
  end


end

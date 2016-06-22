class CalendarsController < ApplicationController

  def show
    data = User.find(params[:player_id]).get_user_schedule

    render :json => data

  end
end

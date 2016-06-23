class NotificationsController < ApplicationController

skip_before_filter :verify_authenticity_token

  def create
    @notification = Notification.new(notification_params)
    if @notification.save
      @notification = Notification.new
      render :status => 200, :json => {:id => @notification.id }
    end
  end

  def new
    @notification = Notification.new

    render :json => @notification
  end



  def update
    @notification = Notification.find(params[:id])
    @notification.update(
      read: params[:read]
    )
    render :nothing => true, :status => 200

  end




  def notification_params
    params.require(:notification).permit(
    :user_id,
    :notification_text,
    :content,
    :read
  )
  end





end
class NotificationsController < ApplicationController

skip_before_filter :verify_authenticity_token






  def update
    @notification = Notification.find(params[:id])
    @notification.update(
      read: params[:read]
    )
    render :nothing => true, :status => 200

  end










end
class GradesController < ApplicationController

skip_before_filter :verify_authenticity_token



  def index
    grades = Grade.where("user_id = ?", params[:player_id])
    render :json => grades
  end

  def show
    grade = Grade.find(params[:id])

    render :json => grade
  end

  def create

    grade = Grade.new(grade_params)
    if grade.save
      player = User.find(params[:player_id])
      coach = User.where("team_id = ? AND coach = ?", player.team_id, true)
      Notification.create(
        user_id: coach.id,
        notification_text: "The #{player.full_name}'s grades were submitted.",
        content: "grade",
        read: false
      )
      render :status => 200, :json => {:id => grade.id }
    end
  end



  def update
    grade = Grade.find(params[:id])
    grade.update(
      user_id: params[:user_id],
      course: params[:course],
      assignment_type: params[:assignment_type],
      grade: params[:grade]
    )
    render :nothing => true, :status => 200
  end


  def destroy
    grade = Grade.find(params[:id])
    grade.destroy

    render :nothing => true, :status => 200
  end



protected

  def resource_params
    params.require(:grade).permit(
    :user_id,
    :course,
    :assignment_type,
    :grade
  )
  end


end

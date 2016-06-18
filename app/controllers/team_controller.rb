require 'google/apis/calendar_v3'
require 'google/api_client/client_secrets'
require 'json'

class TeamController < ApplicationController


  def index


  end

  def show

    # res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
    # res.header('Access-Control-Allow-Methods', 'GET');
    @team = Team.find(params[:id])
    @resources = @team.resources.order(updated_at: :asc)
    @players = @team.users.where(coach: false)
    @coach = @team.users.where(coach: true)

    @data = []

    @players.each do |player|
      data << {
        name: @player.name,
        id: @player.id
      }
    end

    render :json => @data

  end

  def create_google_auth
    @team = Team.find(1)
    @resources = @team.resources.order(updated_at: :asc)
    @players = @team.users.where(coach: false)
    @coach = @team.users.where(coach: true)

    player_events = []

    calendar = @players[0][:calendar_id]
    puts "************** calendar id: #{calendar}"

    client_opts = {"authorization_uri"=>"https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=1072088737400-0mufodco7n7utcg21v8mis7s407t5atq.apps.googleusercontent.com&redirect_uri=http://localhost:3000/sessions/create&response_type=code&scope=https://www.googleapis.com/auth/calendar", "token_credential_uri"=>"https://accounts.google.com/o/oauth2/token", "client_id"=>"1072088737400-0mufodco7n7utcg21v8mis7s407t5atq.apps.googleusercontent.com", "client_secret"=>nil, "scope"=>["https://www.googleapis.com/auth/calendar"], "state"=>nil, "code"=>nil, "redirect_uri"=>"http://localhost:3000/sessions/create", "username"=>nil, "password"=>nil, "issuer"=>nil, "audience"=>nil, "person"=>nil, "expiry"=>60, "expires_at"=>1466211285, "signing_key"=>nil, "refresh_token"=>nil, "access_token"=>"ya29.CjAEA7YngxJckxCrRIEdNCokZgh028kPvQZODZ3i70vhi7woaKsg1iILePvy0fv5W0Y", "id_token"=>nil, "extension_parameters"=>{}}
    auth_client = Signet::OAuth2::Client.new(client_opts)
    service = Google::Apis::CalendarV3::CalendarService.new

    service.client_options.application_name = 'Ryan testing Google Calendar API'
    service.authorization = auth_client

    list_events = service.list_events(
      calendar, 
      always_include_email: nil, 
      i_cal_uid: nil, 
      max_attendees: nil, 
      max_results: nil, 
      order_by: nil, 
      page_token: nil, 
      private_extended_property: nil, 
      q: nil, shared_extended_property: nil, 
      show_deleted: nil, 
      show_hidden_invitations: nil, 
      single_events: nil, 
      sync_token: nil, 
      time_max: nil, 
      time_min: nil, 
      time_zone: nil, 
      updated_min: nil, 
      fields: nil, 
      quota_user: nil, 
      user_ip: nil, 
      options: nil
      )
    # puts "*********** item 1: #{list_events.items[0].start.date_time}"

    list_events.items.each do |event|
      temp = {
        start: event.start.date_time,
        finish: event.end.date_time
      }
      player_events << temp
    end

    puts "*************** player_events: #{player_events}"

  end




end

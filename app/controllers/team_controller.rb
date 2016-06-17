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
    client_opts = {"authorization_uri"=>"https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=1072088737400-0mufodco7n7utcg21v8mis7s407t5atq.apps.googleusercontent.com&redirect_uri=http://localhost:3000/sessions/create&response_type=code&scope=https://www.googleapis.com/auth/calendar", "token_credential_uri"=>"https://accounts.google.com/o/oauth2/token", "client_id"=>"1072088737400-0mufodco7n7utcg21v8mis7s407t5atq.apps.googleusercontent.com", "client_secret"=>nil, "scope"=>["https://www.googleapis.com/auth/calendar"], "state"=>nil, "code"=>nil, "redirect_uri"=>"http://localhost:3000/sessions/create", "username"=>nil, "password"=>nil, "issuer"=>nil, "audience"=>nil, "person"=>nil, "expiry"=>60, "expires_at"=>1466205140, "signing_key"=>nil, "refresh_token"=>nil, "access_token"=>"ya29.CjAEA0MPl10etWURZ5YuEBSW82HjmVa6r71REk39Y5h3frLg5XqkKZEvW5oWjgW4dqE", "id_token"=>nil, "extension_parameters"=>{}}
    auth_client = Signet::OAuth2::Client.new(client_opts)
    service = Google::Apis::CalendarV3::CalendarService.new

    service.client_options.application_name = 'Ryan testing Google Calendar API'
    service.authorization = auth_client

    calendar_list = service.list_calendar_lists
    puts calendar_list
  end




end

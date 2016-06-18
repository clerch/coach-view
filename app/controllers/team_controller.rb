require 'google/apis/calendar_v3'
require 'google/api_client/client_secrets'
require 'json'



class TeamController < ApplicationController


  def index


  end

  def show

    # res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
    # res.header('Access-Control-Allow-Methods', 'GET');
    @team = Team.find(1) #params[:id]
    @resources = @team.resources.order(updated_at: :asc)
    @players = @team.users.where(coach: false)
    @coach = @team.users.where(coach: true)

    @data = get_team_schedule(@players)

    render :json => @data

  end

  def get_team_schedule(players)

    data = []

    players.each do |player|
      data << {
        name: player.first_name,
        id: player.id,
        events: get_user_events(player)
      }
    end
    
    return data

  end

  def get_user_events(player)

    player_events = []
    calendar = @players[0][:calendar_id] #hard coded needs to change.
    events_list = fetch_events_list(calendar)

    events_list.items.each do |event|
      temp = {
        start: event.start.date_time,
        finish: event.end.date_time
      }
      player_events << temp
    end

    return player_events

  end


  def fetch_events_list(player)
  
      client_opts = {"authorization_uri"=>"https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=1072088737400-0mufodco7n7utcg21v8mis7s407t5atq.apps.googleusercontent.com&redirect_uri=http://localhost:3000/sessions/create&response_type=code&scope=https://www.googleapis.com/auth/calendar", 
      "token_credential_uri"=>"https://accounts.google.com/o/oauth2/token", 
      "client_id"=>ENV['GOOGLE_API_CLIENT_ID'], 
      "client_secret"=>ENV['GOOGLE_API_CLIENT_SECRET'], 
      "scope"=>["https://www.googleapis.com/auth/calendar"], 
      "state"=>nil, 
      "code"=>nil, 
      "redirect_uri"=>nil, 
      "username"=>nil, 
      "password"=>nil, 
      "issuer"=>nil, 
      "audience"=>nil, 
      "person"=>nil, 
      "expiry"=>60, 
      "expires_at"=>player.expires_at, 
      "signing_key"=>nil, 
      "refresh_token"=>player.refresh_token, 
      "access_token"=>nil, 
      "id_token"=>nil, 
      "extension_parameters"=>{}}

      CLIENT_SECRETS = Google::APIClient::ClientSecrets.new(client_opts)

      # Build an authorization object from the client secrets.
      # authorization is a Client object
      auth_client = CLIENT_SECRETS.to_authorization
      auth_client.update_token!(
        # :access_token => session['credentials']['access_token'],
        :refresh_token => player.refresh_token
      )
      

    # before do
    #   # Ensure user has authorized the app
    #   unless user_credentials.access_token || request.path_info =~ /\A\/oauth2/
    #     redirect to('/oauth2authorize')
    #   end
    # end

      # # Execute the profile API call.
      # get_profile = lambda do
      #   client.execute(
      #     :api_method => plus_api.people.get,
      #     :parameters => {'userId' => 'me'},
      #     :authorization => authorization
      #   )
      # end
      # profile_result = get_profile.call()
      # if profile_result.status == 401
      #   # The access token expired, fetch a new one and retry once.
      #   client.authorization.fetch_access_token!
      #   profile_result = get_profile.call()
      # end

      # # Execute the activities API call.
      # get_activities = lambda do
      #   client.execute(
      #     :api_method => plus_api.activities.list,
      #     :parameters => {'userId' => 'me', 'collection' => 'public'},
      #     :authorization => authorization
      #   )
      # end
      # activities_result = get_activities.call()
      # if activities_result.status == 401
      #   # The access token expired, fetch a new one and retry once.
      #   client.authorization.fetch_access_token!
      #   activities_result = get_activities.call()
      # end
      
      # erb :whoami, :locals => {
      #   :profile => profile_result.data,
      #   :post => activities_result.data.items.first
      # }

    # auth_client = Signet::OAuth2::Client.new(client_opts)
    service = Google::Apis::CalendarV3::CalendarService.new

    service.client_options.application_name = 'Ryan testing Google Calendar API'
    service.authorization = auth_client

    events_list = service.list_events(
      player.calendar_id, 
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

    return events_list
  end  

end

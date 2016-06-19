class TeamController < ApplicationController

  def index

  end

######## move to events_controller eventually
  def index_events
    @team = Team.find(1) #params[:id] - hard coded
    @coach = @team.users.where(coach: true)[0]
    team_events = []

    events_list = fetch_all_events(@coach)
    events_list.items.each do |event|
      temp = {
        start: event.start.date_time,
        finish: event.end.date_time
      }
      team_events << temp
    end

    data = {
        name: @coach.first_name,
        id: @coach.id,
        events: team_events
    }

    puts data

    render :json => data

  end

  def create_team_event

  end

  def fetch_all_events(coach)

    client_opts = {"web"=>{
      "token_credential_uri"=>"https://accounts.google.com/o/oauth2/token", 
      "client_id"=>ENV['GOOGLE_API_CLIENT_ID'], 
      "client_secret"=>ENV['GOOGLE_API_CLIENT_SECRET'], 
      "scope"=>["https://www.googleapis.com/auth/calendar"]
      }
    }

      client_secrets = Google::APIClient::ClientSecrets.new(client_opts)

      # Build an authorization object from the client secrets.
      # authorization is a Client object
      auth_client = client_secrets.to_authorization
      auth_client.update_token!(
        # :access_token => coach.access_token,
        :refresh_token => coach.refresh_token
      )

    # auth_client = Signet::OAuth2::Client.new(client_opts)
    service = Google::Apis::CalendarV3::CalendarService.new
    service.client_options.application_name = 'Ryan testing Google Calendar API'
    service.authorization = auth_client

    events_list = service.list_events(
      coach.calendar_id,
      max_results: nil, 
      single_events: nil, 
      time_max: nil, 
      time_min: nil, 
      time_zone: nil, 
      options: nil
    )

    events_list

  end

  ############## end of move to events_controller eventually

  def show
    @team = Team.find(1) #params[:id] - hard coded
    @resources = @team.resources.order(updated_at: :asc)
    @players = @team.users.where(coach: false)
    @coach = @team.users.where(coach: true)

    @data = get_team_schedule(@players)

    puts @data

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
    
    data

  end

  def get_user_events(player)

    player_events = []
    calendar = player.calendar_id 
    events_list = fetch_events_list(player)

    events_list.items.each do |event|
      temp = {
        start: event.start.date_time,
        finish: event.end.date_time
      }
      player_events << temp
    end

    player_events

  end


  def fetch_events_list(player)
    client_opts = {"web"=>{
      "token_credential_uri"=>"https://accounts.google.com/o/oauth2/token", 
      "client_id"=>ENV['GOOGLE_API_CLIENT_ID'], 
      "client_secret"=>ENV['GOOGLE_API_CLIENT_SECRET'], 
      "scope"=>["https://www.googleapis.com/auth/calendar"]
      }
    }
      

      client_secrets = Google::APIClient::ClientSecrets.new(client_opts)

      # Build an authorization object from the client secrets.
      # authorization is a Client object
      auth_client = client_secrets.to_authorization
      auth_client.update_token!(
        # :access_token => player.access_token,
        :refresh_token => player.refresh_token
      )

    # auth_client = Signet::OAuth2::Client.new(client_opts)
    service = Google::Apis::CalendarV3::CalendarService.new
    service.client_options.application_name = 'Ryan testing Google Calendar API'
    service.authorization = auth_client

    events_list = service.list_events(
      player.calendar_id,
      max_results: nil, 
      single_events: nil, 
      time_max: nil, 
      time_min: nil, 
      time_zone: nil, 
      options: nil
    )

    events_list
  end  

end

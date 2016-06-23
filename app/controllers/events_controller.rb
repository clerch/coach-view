class EventsController < ApplicationController

  def create
    @team = Team.find(params[:id]) #params[:id] - hard coded
    @coach = @team.users.where("coach = ?", true)[0]

    service = get_service(@coach)

    if params[:create]
      params[:create].each do |event|
        event = create_event(event[:event_type], event[:start], event[:finish])
        result = service.insert_event(@coach.calendar_id, event)
        puts "Event created: #{result.id}"
      end
    end
    
    if params[:delete]
      params[:delete].each do |event|
        event_id = event[:id]
        result = service.delete_event(@coach.calendar_id, event_id)
        puts "Event deleted: #{event_id}"
      end 
    end
  end

  def create_event(event_type, start, finish)
    event = Google::Apis::CalendarV3::Event.new({
      summary: event_type,
      start: {
        date_time: start,
        time_zone: 'America/Los_Angeles',
      },
      end: {
        date_time: finish,
        time_zone: 'America/Los_Angeles',
      }
    })

    event
  end

  def get_service(coach)
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
    return service
  end

end
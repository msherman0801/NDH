require "json"
require 'rest-client' 

class PersonsController < ActionController::API

    before_action :authenticate, only: [:api_check_in]

    def token
        request.headers['X-API-KEY']
    end

    def check_in
        params['response'] = JSON.parse(RestClient::Request.execute(
            method: "GET",
            url: "http://api.ipstack.com/#{params['geolocation']}?access_key=#{ENV["IP_STACK_KEY"]}"
        ))
        tracker = Tracker.create(tracker_params)
        person = Person.create(person_params)
        person.tracker = tracker
        render json: person
    end

    def api_check_in
        binding.pry
        # params['response'] = JSON.parse(RestClient::Request.execute(
        #     method: "GET",
        #     url: "http://api.ipstack.com/#{params['geolocation']}?access_key=#{ENV["IP_STACK_KEY"]}"
        # ))
        # tracker = Tracker.create(tracker_params)
        person = Person.create(person_params)
        person.tracker = tracker
        render json: person
    end

    def get_persons_list
        person = Person.where(person_params)
        puts person
        render json: person
    end

    protected
  
    # Authenticate the user with token based authentication
    def authenticate
        authenticate_token || render_unauthorized
    end
  
    def authenticate_token
        permitted_user = User.find_by(api_key: token)
        true if permitted_user
    end
  
    def render_unauthorized(realm = "Application")
        self.headers["WWW-Authenticate"] = %(Token realm="#{realm}")
        render json: 'Bad credentials', status: :unauthorized
    end

    private

    def person_params
        params.require(:person).permit(:first_name, :last_name, :location, :geolocation, :family_member_1, :family_member_2, :family_member_3, :family_member_4)
    end

    def tracker_params
        params.require(:response).permit(:ip, :continent_name, :country_name, :region_name, :city, :zip, :latitude, :longitude)
    end
end

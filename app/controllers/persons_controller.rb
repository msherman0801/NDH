require "json"
require 'rest-client' 

class PersonsController < ActionController::API

    def test
        puts params
        user = User.create(username: 'jamaica')
        puts user.username
        render json: user
    end

    def posting
        ip = params['ip']
        response = RestClient::Request.execute(
            method: "GET",
            url: "http://api.ipstack.com/#{ip}?access_key=#{ENV["IP_STACK_KEY"]}"
        )
        json_data = JSON.parse(response)
        render json: json_data
    end

    def checkin
        person = Person.create(person_params)
        render json: person
    end

    private

    def person_params
        params.require(:person).permit(:first_name, :last_name, :location, :geolocation, :family_member_1, :family_member_2, :family_member_3, :family_member_4)
    end
end

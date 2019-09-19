require "json"
require 'rest-client' 

class DisastersController < ActionController::API

    def get_city_ids
        response = JSON.parse(RestClient::Request.execute(
            method: "GET",
            url: "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=#{ENV['ACCUWEATHER_KEY']}&q=#{params['city']}"
        ))
        
        render json: response
    end

    def get_city_data
        puts params
        response = JSON.parse(RestClient::Request.execute(
            method: "GET",
            url: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/#{params['city_id']}?apikey=#{ENV['ACCUWEATHER_KEY']}"
        ))
        
        render json: response
    end


end
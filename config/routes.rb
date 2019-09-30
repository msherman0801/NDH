Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/checkin' => 'persons#check_in'
  post '/getcityids' => 'disasters#get_city_ids'
  post '/getcitydata' => 'disasters#get_city_data'
  post '/getpersonslist' => 'persons#get_persons_list'

  post '/register' => 'users#create'
  post '/login' => 'users#login'

  # API Routes

  post '/api/checkin' => 'api#check_in'
  get '/api/persons' => 'api#persons'
end


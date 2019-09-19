Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/checkin' => 'persons#checkin'
  post '/getcityids' => 'disasters#get_city_ids'
  post '/getcitydata' => 'disasters#get_city_data'
  post '/getpersonslist' => 'persons#get_persons_list'
end


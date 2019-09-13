class PersonsController < ActionController::API

    def test
        puts params
        user = User.create(username: 'jamaica')
        puts user.username
        render json: user
    end

    def posting
        puts params
        user = User.create(username: params['_json'])
        puts user.username
        render json: user
    end
end

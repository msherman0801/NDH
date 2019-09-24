require 'jwt'
class UsersController < ActionController::API

    def create 
        puts params
        user = User.create(user_params(:username, :password, :email, :organization, :first_name, :last_name))
        if user.valid?
            puts 'IT WORKED'
            render json: user
        else
            render json: user.errors
        end
    end

    def login
        user = User.find_by(user_params(:username))
        if user && user.authenticate(params[:password])
            token = 'token'
            render json: {user: user, token: token}
        else
            render json: {error: "The username or password you entered was incorrect."}
        end
    end

    private

    def user_params(*args)
        params.permit(*args)
    end
end
class User < ApplicationRecord
    has_secure_password
    validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true

    # assigns an api key before creating the actual user
    before_create do |user|
        user.api_key = user.generate_api_key
    end

    # generates a unique key for the user
    def generate_api_key
        loop do
        token = SecureRandom.base64.tr('+/=', 'Qrt')
        break token unless User.exists?(api_key: token)
        end
    end
end
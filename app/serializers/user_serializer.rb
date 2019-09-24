class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :first_name, :last_name, :email, :organization, :api_key
end
  
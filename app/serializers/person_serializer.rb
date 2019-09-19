class PersonSerializer < ActiveModel::Serializer
  attributes :id,  :first_name, :last_name, :location, :geolocation, :family_member_1, :family_member_2, :family_member_3, :family_member_4 
  has_one :tracker
end

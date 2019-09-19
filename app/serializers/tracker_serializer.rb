class TrackerSerializer < ActiveModel::Serializer
  attributes :id, :ip, :continent_name, :country_name, :region_name, :city, :zip, :latitude, :longitude
  belongs_to :person
end

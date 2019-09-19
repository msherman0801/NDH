class CreateTrackers < ActiveRecord::Migration[5.2]
  def change
    create_table :trackers do |t|
      t.string :ip
      t.string :continent_name
      t.string :country_name
      t.string :region_name
      t.string :city
      t.string :zip
      t.string :latitude
      t.string :longitude
      t.integer :person_id
    end
  end
end

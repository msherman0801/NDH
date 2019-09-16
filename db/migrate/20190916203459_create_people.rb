class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :location
      t.string :geolocation
      t.string :family_member_1
      t.string :family_member_2
      t.string :family_member_3
      t.string :family_member_4
    end
  end
end

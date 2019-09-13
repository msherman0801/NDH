class CreatePersons < ActiveRecord::Migration[5.2]
  def change
    create_table :persons do |t|
      t.string :first_name
      t.string :last_name
      t.string :location
      t.string :geolocation
      t.string :family_member_one
      t.string :family_member_two
      t.string :family_member_three
      t.string :family_member_four
    end
  end
end

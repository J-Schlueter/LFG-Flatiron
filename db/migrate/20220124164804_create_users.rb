class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :gamertag
      t.string :platforms

      t.timestamps
    end
  end
end

class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :game
      t.string :platform
      t.datetime :time

      t.timestamps
    end
  end
end

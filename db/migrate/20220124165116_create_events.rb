class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :game
      t.string :platform
      t.datetime :time
      t.integer :respondees
      t.references :user, null: false, foreign_key: true
      t.references :platform, null: false, foreign_key: true

      t.timestamps
    end
  end
end

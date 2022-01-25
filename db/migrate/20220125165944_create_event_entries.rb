class CreateEventEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :event_entries do |t|
      t.string :gamertag
      t.references :user, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end

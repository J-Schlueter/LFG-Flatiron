class Event < ApplicationRecord
    has_many :event_entries
    has_many :users, through: :event_entries
end

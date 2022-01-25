class User < ApplicationRecord
    has_many :event_entries
    has_many :events, through: :event_entries
end

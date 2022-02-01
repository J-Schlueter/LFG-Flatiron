class EventSerializer < ActiveModel::Serializer
  attributes :id, :game, :platform, :time, :event_entries, :users
end

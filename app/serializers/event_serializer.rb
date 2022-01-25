class EventSerializer < ActiveModel::Serializer
  attributes :id, :game, :platform, :time
end

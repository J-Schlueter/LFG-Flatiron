class EventSerializer < ActiveModel::Serializer
  attributes :id, :game, :platform, :time, :respondees
  has_one :user
  has_one :platform
end

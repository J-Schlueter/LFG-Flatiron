class EventEntrySerializer < ActiveModel::Serializer
  attributes :id, :gamertag
  has_one :user
  has_one :event
end

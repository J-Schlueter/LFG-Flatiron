class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :gamertag, :platforms
end

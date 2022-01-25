class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :platform
end

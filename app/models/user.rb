class User < ApplicationRecord
    has_many :events
    has_many :platforms, through: :events
end

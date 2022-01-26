class User < ApplicationRecord
    has_many :event_entries, dependent: :destroy
    has_many :events, through: :event_entries

    has_secure_password, validations: false

    validates :name, :password, presence: true
end

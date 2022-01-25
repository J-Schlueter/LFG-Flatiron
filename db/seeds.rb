# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."

3.times do Platform.create(
    name: Faker::Game.platform,
    games: Faker::Game.title
)
end

10.times do User.create(
    name: Faker::Name.name,
    gamertag: Faker::Name.name,
    platform: Faker::Game.platform
)
end

5.times do Event.create(
    game: Faker::Game.title,
    platform: Faker::Game.platform,
    time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
    respondees: rand(1...20)
)
end
puts "✅ Done seeding!"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."

3.times {Platform.create(
    name: Faker::Game.platform,
    games: Faker::Game.title
)}

10.times {User.create(
    name: Faker::Name.name,
    gamertag: Faker::Name.name,
    platforms: Faker::Game.platform
)}

5.times {Event.create(
    game: Faker::Game.title
    platform: Faker::Game.platform
    time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
    respondees: rand(1...20)
)}

puts "✅ Done seeding!"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Generating gamers..."

Event.create([
    {
      game: "Halo Infinite",
      platform: "PC",
      time: DateTime.new(2022,2,4,18)
    },
    {
      game: "FFXIV",
      platform: "PC",
      time: DateTime.new(2022,2,4,19)
    },
    {
      game: "Super Smash Bros Ultimate",
      platform: "Nintendo Switch",
      time: DateTime.new(2022,2,5,12)
    }
  ])

  User.create([
    {
      name: "Joshua",
      password: "123",
      platform: "PC, Playstation 4, Xbox 360"
    },
    {
      name: "Kenneth",
      password: "123",
      platform: "PC"
    },
  ])

  EventEntry.create([
      {
          gamertag: "JShooter",
          user_id: 1,
          event_id: 1
      }
  ])
puts "✅ Ready up!"

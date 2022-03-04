
User.create!(
    {
        first_name: "Craig",
        last_name: "Jope",
        username: "cjope",
        email: "craigjope@gmail.com",
        password: "123",
        password_confirmation: "123",
        age: 34,
        bio: "This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. This is a test Bio. ",
        img_url: "https://i.etsystatic.com/iusa/2800b7/40397800/iusa_400x400.40397800_2c9o.jpg"
    }
)

Item.create!(name: "Potatoes", perishable: true, extension: 5, ext_type: 2, receive_date: Date.today)
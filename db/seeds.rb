puts "Seeding..."

Review.destroy_all
Order.destroy_all
Gift.destroy_all
Friend.destroy_all
User.destroy_all

User.create(name:"Jessica", user_name: "jessjess", email:"ellijs@hotmail.com", phone_number:"1-646-623-8546", birthdate:"1996-10-01", img_url:"https://pbs.twimg.com/profile_images/1065455403046076416/8F4b6lMk.jpg", admin: false, password:"1111", password_confirmation: "1111")
User.create(name:"Spiderman", user_name: "spider_web", email:"abc@gmail.com", phone_number:"1-646-623-8546", birthdate:"1993-13-08", img_url:"https://assets1.ignimgs.com/2019/04/17/far-from-home-1555542645374_160w.png?width=1280", admin: false, password:"1111", password_confirmation: "1111")
User.create(name:"Adam La Rosa", user_name: "potato", email:"potato@gmail.com", phone_number:"", birthdate:"1987-10-11", img_url:"https://i.pinimg.com/474x/04/25/b2/0425b23c28ba3d002df5ab9a30d2ef93--adam-sandler-the-floor.jpg", admin: true, password:"1111", password_confirmation: "1111")

Gift.create(category:"dessert", brand_name:"StartBucks", brand_url:"https://logos.jobget.com/starbucks", item_name:"Americano", description:"Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfully rich cup with depth and nuance. Pro Tip: For an additional boost, ask your barista to try this with an extra shot.", price: 5, gift_url:"https://partiesbymartins.com/image/cache/data/rapid%20pick%20up%20/starbucks%20/SBux%20American%20PBM-600x600.jpg", likes: 380)

Gift.create(category:"dessert", brand_name:"StartBucks", brand_url:"https://logos.jobget.com/starbucks", item_name:"Sweety Chocolatti", description:"A one-to-one combination of fresh-brewed coffee and milk add up to one distinctly delicious coffee drink remarkably mixed. then served over ice. Plus, Light Double Chocolate Loaf Cake filled with chunks of dark chocolate and topped with a rich chocolate ganache. Perfect match!", price: 10, gift_url:"https://i.pinimg.com/originals/72/cf/37/72cf37226149e960989c4fc888ec75f2.jpg", likes: 560)

Gift.create(category:"dessert", brand_name:"Mayson Kayser", brand_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhrI8at3C-mPNvT-diHmfXlY56oR92QkeBfpgzpZ0bzn0xRaqzj_Zg8LInEcLJ0Rxy7U&usqp=CAU", item_name:"Pink Heart Macaronade", description:"To celebrate all those wonderful mothers out there, the bakers at Maison Kayser have created a magnificent dessert that combines the crisp crunch of meringue with the fruitiness of strawberry coulis and the creaminess of vanilla. It’s as inviting as one of mum’s hugs and as sweet as her kisses! And to make it look (almost!) as gorgeous as mum, we’ve decorated it with a mix of summer fruits and a big, beautiful heart.
A light, fruity, gourmet delight that is sure to make mum melt. Perfect gift for any enjoyable occations", price: 45, gift_url:"https://www.maison-kayser.com/info/wp-content/uploads/2018/04/fete-des-meres-macaronade-boulangerie-kayser.jpg", likes: 217)

Gift.create(category:"food", brand_name:"Wolfgang Steakhouse", brand_url:"https://pbs.twimg.com/profile_images/1143272084916903941/kMEzI22F_400x400.jpg", item_name:"Romantic dinner for two", description:"To celebrate all those wonderful occasions out there, Demi-glace, mushrooms, and sherry wine, served with mashed potatoes and broccoli. Porterhouse steak that's derived from the point where the tenderloin and top loin meet. Also served a BOTTLE of wine. For your dinner, it goes perfect!", price: 145, gift_url:"https://i.pinimg.com/736x/4a/11/52/4a11522384a4d2266e482d0b1fa339a7.jpg", likes: 312)

Gift.create(category:"food", brand_name:"TGI Fridays", brand_url:"https://pbs.twimg.com/profile_images/1360607858/77034_464611713927_128425088927_5531490_8060526_n.jpg", item_name:"Lunch Sampler with beer", description:"2 sliders, and choose from Boneless or Traditional Wings and enjoy four of our worldly wing flavors. Served with a side of Ranch or Blue Cheese and marinara. Wing flavors are: Classic Buffalo, Tropical BBQ, Spicy Hot Mustard and Garlic Parmesan. a glass of beer will be perfect match!", price: 19, gift_url:"https://www.fsrmagazine.com/sites/default/files/styles/homepage_carousel_2x_640x476/public/story-images/tgi-fridays-refreshes-bar-menu-5-deals-all-day.jpg?itok=2tQWCdWu", likes: 183)

Gift.create(category:"food", brand_name:"Macdonald's", brand_url:"https://pxc86358mpx1hyn3hdxen4o1-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/logo-mcdonalds1.png", item_name:"Bic Mac Meal", description:"The one and only McDonald’s Big Mac® Combo Meal. Big Mac Ingredients include a classic sesame hamburger bun, Big Mac Sauce, American cheese and sliced pickles. McDonald's Big Mac meal is served with our World Famous Fries® and your choice of an icy Coca-Cola® or other fountain drink. There are 1,080 calories in a Big Mac® Combo Meal with a medium Coca-Cola® and medium fries.", price: 10, gift_url:"https://simply.delivery/wp-content/uploads/2020/04/mcdonalds-big-mac-no-meat-meal.jpg", likes: 589)

Gift.create(category:"food", brand_name:"Burger King", brand_url:"https://www.cooperssquare.co.uk/wp-content/uploads/2019/06/burger-king-logo.png", item_name:"Family Bundle King", description:"Sharing fun meals with your friends and family! This special Family Bundle king comes with 2 cheeseburgers, 2 grilled chicken sandwiches, 2 medium drinks, 5 pcs chicken nuggets and 2 medium fries. Enjoy great taste with reasonable price!", price: 23, gift_url:"https://i0.wp.com/klfoodie.com/wp-content/uploads/2020/06/101540508_3131023680288655_6904573632454852608_o-2.jpg?resize=708%2C708&ssl=1", likes: 235)

Gift.create(category:"food", brand_name:"Burger King", brand_url:"https://www.cooperssquare.co.uk/wp-content/uploads/2019/06/burger-king-logo.png", item_name:"Classic Whopper Meal", description:"Whopper Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun. Perfect quick meal gift for hungry friend!", price: 9, gift_url:"https://www.upoharbd.com/images/uploads/Food/burger_king01.jpg", likes: 374) 

Gift.create(category:"food", brand_name:"KFC", brand_url:"https://png.pngitem.com/pimgs/s/489-4893105_kfc-logo-png-kfc-logo-transparent-png.png", item_name:"KFC 10pcs feast", description:"10 pieces of our freshly prepared World Famous Chicken, 2 large mashed potatoes, a gravy, large coleslaw, 4 biscuits, 4 chocolate chip cookies and a beverage bucket.", price: 20, gift_url:"https://glitchndealz.com/wp-content/uploads/kfc.png", likes: 145)

Gift.create(category:"food", brand_name:"KFC", brand_url:"https://png.pngitem.com/pimgs/s/489-4893105_kfc-logo-png-kfc-logo-transparent-png.png", item_name:"KFC 3pieces box deal", description:"2 breasts, 1 wing, 2 sides of your  loved one's choice, a biscuit, and a medium drink.", price: 8, gift_url:"https://manofmany.com/wp-content/uploads/2020/10/Zinger-Stacker-2.jpg", likes: 145)

Gift.create(category:"dessert", brand_name:"Krispy Kreme", brand_url:"https://pbs.twimg.com/profile_images/1055221624511909890/GdpUK4A__400x400.jpg", item_name:"Dozen assorted doughnut box", description:"A light and airy doughnut covered in all-new Maple Glaze, made with real maple syrup. A doughnut filled with REESE’S Peanut Butter Kreme™, dipped in HERSHEY’S chocolate icing, topped with mini peanut butter chips and a drizzle of chocolate and REESE’S peanut butter sauce. And many more!", price: 14, gift_url:"https://i.dailymail.co.uk/1s/2020/11/17/11/35769288-8957195-image-m-17_1605610910370.jpg", likes: 78)

Gift.create(category:"dessert", brand_name:"Krispy Kreme", brand_url:"https://pbs.twimg.com/profile_images/1055221624511909890/GdpUK4A__400x400.jpg", item_name:"Triple Caramel frappe", description:"A decadent favorite. Our latte is blended with caramel chocolate sauce and topped with whipped cream and caramel drizzle. 3 drinks will be sharable with collegues and mates!", price: 15, gift_url:"https://www.sheknows.com/wp-content/uploads/2018/12/rqjvzkysruriqywbpe2i.png?w=695&h=391&crop=1", likes: 75)



Order.create(user_id: 1, gift_id: 1, receiver_name: "Josh Nelson", receiver_email:"abc@defg.com", receiver_phone_number:"1-342-524-6847", quantity: 1, message: "Cheer Up! Here's the coffee gift I am sending, please have some cold coffee and get some fresh air!")

Order.create(user_id: 1, gift_id: 2, receiver_name: "Kim Kardasian", receiver_email:"bcd@efgh.com", receiver_phone_number:"1-387-482-5748", quantity: 1, message: "Happy birthday! Brother! Your lunch is on me today! Hope you have a great birthday and see you on the weekend!")

Order.create(user_id: 2, gift_id: 3, receiver_name: "Justin Bieber", receiver_email:"cde@fghi.com", receiver_phone_number:"1-482-384-2957", quantity: 1, message: "Happy Anniversary SweetHeart! Wish I could see you right.. but I am sending delicious cakes instead. Enjoy it with your colleagues. I am looking forward to seeing you tonight!")

Order.create(user_id: 2, gift_id: 2, receiver_name: "Will Smith", receiver_email:"def@ghij.com", receiver_phone_number:"1-492-385-5827", quantity: 1, message: "Nothing. I just want to let you know that I can't get you out of my mind. Enjoy this bic Mac meal and have a great day!")

Order.create(user_id: 3, gift_id: 6, receiver_name: "Will Smith", receiver_email:"", receiver_phone_number:"1-829-583-4867", quantity: 2, message: "Hello! how are you? I am just sending this to you becasue I just wanted to let you knwo that I am thinking about you all the time. hehe. have a great day and enjoy this meal!")

Order.create(user_id: 3, gift_id: 7, receiver_name: "Will Smith", receiver_email:"def@ghij.com", receiver_phone_number:"", quantity: 3, message: "Even though we don't se each other often, I wish you all the best! I miss you so much, hope to see you sooner.")



Friend.create(user_id: 1, name: "Shawn Choi", email: "abd@defg.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04", img_url: "https://i.pinimg.com/originals/05/13/64/051364959f28400a106c55481005854d.jpg")

Friend.create(user_id: 1, name: "Natali Portman", email: "hi@jklm.com", phone_number: "1-283-492-4859", birthdate: "1989-09-07", img_url: "https://i.pinimg.com/originals/c8/81/d3/c881d387a7c49114fd20521c2077a94b.png")

Friend.create(user_id: 1, name: "Lady GaGa", email: "ijk@lmno.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", img_url: "https://i.ytimg.com/vi/S7HnU_oNBw4/hqdefault.jpg")

Friend.create(user_id: 2, name: "Ariana Grande", email: "jkl@mnop.com", phone_number: "1-839-283-3829", birthdate: "2000-08-30", img_url: "https://media.allure.com/photos/5ef614fa7646440008f551ff/3:4/w_1500,h_2000,c_limit/ariana-grande-shorter-hair-lede.jpg")

Friend.create(user_id: 2, name: "Chris Hemsworth", email: "klm@nopq.com", phone_number: "1-917-384-2948", birthdate: "1988-04-12", img_url: "https://i.pinimg.com/originals/a0/dc/a0/a0dca03ec7a4c0f5de27e3005cc79887.jpg")

Review.create(gift_id: 6, user_id: 3, order_id: 5, content: "The esiest way to send a gift to your friend. Highly recommneded!", ratings: 4)

Review.create(gift_id: 7, user_id: 3, order_id: 6, content: "I send this to my little bot on his birthday, he enjoyed it with his friends. He was very happy and I felt gooooood.", ratings: 5)

Review.create(gift_id: 2, user_id: 1, order_id: 2, content: "My friend really liked it. He did not bring any wallet today. He could use this gift as his lunch! Looking forward to order it again sooner", ratings: 5)

Review.create(gift_id: 3, user_id: 2, order_id: 3, content: "I sent it to my girlfriend she was moved. definitely recommended!", ratings: 5)

Review.create(gift_id: 2, user_id: 2, order_id: 4, content: "I was far from my friend and she can redeem my gift whenever she wants. That's super awesome!", ratings: 5)

Review.create(gift_id: 1, user_id: 1, order_id: 1, content: "Convenient way to show my care to my colleague. I sent them on her promotion day, she loved it. definitely will try this to my fiance.", ratings: 5)


puts "Done seeding!"

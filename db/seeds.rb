deals = [
  { 
  "date"=>"2020-07-06",
  "deal_name"=>"Wonderful week in Monaco",
  "description"=>"Monaco is one of the world’s most fascinating nations. The rich person’s playground has a lot of history, beautiful architecture and plenty of places to eat and drink. Its biggest love may appear to be money, but it’s really motorsport, evidenced by the entire country transforming into the world’s most famous racetrack on Monaco Grand Prix weekend.",
  "price"=>"1500$",
  "location"=>"Monte Carlo",
  "user_id"=>null,
  "image_url"=>"https://i.ibb.co/Xtgz0Rt/nick-karvounis-U6-y8vpac24-unsplash.jpg"
  },
]

deals.each do |item| 
  deal = Deal.create(date: item['date'], description: item['location'])
end  

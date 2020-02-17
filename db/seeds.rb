deals = [
  {
    "date" => "2020-01-06",
    "deal_name" => "Test deal",
    "description" => "Some random text to test JSON",
    "price" => "500$",
    "location" => "Paris"
  },
  {
    "date" => "2020-07-06",
    "deal_name" => "Test deal two",
    "description" => "Some random text to test JSON second",
    "price" => "1500$",
    "location" => "London"
  },
]

deals.each do |item| 
  deal = Deal.create(date: item['date'], description: item['location'])
end  

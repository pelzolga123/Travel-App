require 'rails_helper'

RSpec.describe Deal, type: :model do
  it 'is invalid if id is absent' do
    deal = Deal.new
    deal.id = nil
    deal.date = '10-10-2020'
    deal.deal_name = 'Test deal'
    deal.description = 'Test deal description'
    deal.price = '200$'
    deal.location = 'Test location'
    deal.description = 'test.jpg'
    expect(deal).to_not be_valid
  end
  it 'is invalid if date is absent' do
    deal = Deal.new
    deal.id = '1'
    deal.date = nil
    deal.deal_name = 'Test deal'
    deal.description = 'Test deal description'
    deal.price = '200$'
    deal.location = 'Test location'
    deal.description = 'test.jpg'
    expect(deal).to_not be_valid
  end
  it 'is invalid if deal_name is absent' do
    deal = Deal.new
    deal.id = '1'
    deal.date = '10-10-2020'
    deal.deal_name = nil
    deal.description = 'Test deal description'
    deal.price = '200$'
    deal.location = 'Test location'
    deal.description = 'test.jpg'
    expect(deal).to_not be_valid
  end
  it 'is invalid if description is absent' do
    deal = Deal.new
    deal.id = '1'
    deal.date = '10-10-2020'
    deal.deal_name = 'Test deal'
    deal.description = nil
    deal.price = '200$'
    deal.location = 'Test location'
    deal.description = 'test.jpg'
    expect(deal).to_not be_valid
  end
end

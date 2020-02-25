require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is invalid if email is absent' do
    user = User.new
    user.email = nil
    user.password = '123456'
    user.password_confirmation = '1234567'
    expect(user).to_not be_valid
  end

  it 'is invalid if password is absent' do
    user = User.new
    user.email = 'test@test.com'
    user.password = nil
    user.password_confirmation = '1234567'
    expect(user).to_not be_valid
  end

  it 'is invalid if password and password confirmation have different values' do
    user = User.new
    user.email = 'test@test.com'
    user.password = '123456'
    user.password_confirmation = '1234567'
    expect(user).to_not be_valid
  end
end

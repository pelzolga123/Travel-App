class Deal < ApplicationRecord
  validates :date, presence: true
  validates :deal_name, presence: true
  validates :description, presence: true
  validates :price, presence: true
  validates :location, presence: true
  validates :image_url, presence: true
end

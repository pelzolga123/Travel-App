class CreateDeals < ActiveRecord::Migration[6.0]
  def change
    create_table :deals do |t|
      t.string :date
      t.string :deal_name
      t.text :description
      t.string :price
      t.string :location
      t.references :user, foreign_key: true
    end
  end
end

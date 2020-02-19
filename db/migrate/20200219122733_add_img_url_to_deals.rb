class AddImgUrlToDeals < ActiveRecord::Migration[6.0]
  def change
    add_column :deals, :image_url, :string
  end
end

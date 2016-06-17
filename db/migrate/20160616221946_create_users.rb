class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :team_id
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password
      t.string :access_token
      t.string :refresh_token
      t.date :token_expiry_date
      t.boolean :coach

      t.timestamps null: false
    end
  end
end

class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.integer :team_id
      t.string :resource_type
      t.string :content

      t.timestamps null: false
    end
  end
end

class CreateGrades < ActiveRecord::Migration
  def change
    create_table :grades do |t|
      t.integer :user_id
      t.string :course
      t.string :assignment_type
      t.integer :grade

      t.timestamps null: false
    end
  end
end

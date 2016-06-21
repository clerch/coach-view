class AddNameFieldsToTeams < ActiveRecord::Migration
  def change
    add_column :teams, :season_start, :date
    add_column :teams, :season_end, :date
  end
end

class ChangeColumnDataForTeams < ActiveRecord::Migration
  def change
    change_column :teams, :season_start, :datetime
    change_column :teams, :season_end, :datetime

  end
end

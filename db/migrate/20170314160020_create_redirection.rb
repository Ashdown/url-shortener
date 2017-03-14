class CreateRedirection < ActiveRecord::Migration
  def up
    create_table :redirections do |t|
      t.string :url
      t.string :short_url
    end
  end

  def down
    drop_table :redirections
  end
end

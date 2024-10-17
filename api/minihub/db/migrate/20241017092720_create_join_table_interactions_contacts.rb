class CreateJoinTableInteractionsContacts < ActiveRecord::Migration[7.2]
  def change
    create_join_table :interactions, :contacts do |t|
      t.index :interaction_id
      t.index :contact_id
    end
  end
end

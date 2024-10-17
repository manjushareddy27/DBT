class CreateInteractions < ActiveRecord::Migration[7.2]
  def change
    create_table :interactions do |t|
      t.string :description
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end

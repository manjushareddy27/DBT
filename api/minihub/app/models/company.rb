class Company < ApplicationRecord
  has_many :contacts, dependent: :destroy
  has_many :interactions, dependent: :destroy

  validates :name, uniqueness:true
end

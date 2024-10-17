FactoryBot.define do
  factory :contact do
    name { Faker::Name.name }
    association :company
  end
end

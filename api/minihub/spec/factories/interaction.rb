FactoryBot.define do
  factory :interaction do
    description { Faker::Lorem.sentence }
    association :company
  end
end

require 'rails_helper'

RSpec.describe Api::InteractionsController, type: :controller do
  let!(:company) { create(:company) }
  let!(:contacts) { create_list(:contact, 2, company: company) }
  let!(:interaction) { create(:interaction, company: company, contacts: contacts) }

  describe "GET #index" do
    it "returns all interactions for a company" do
      get :index, params: { company_id: company.id }
      expect(response).to have_http_status(:success)
      json_response = JSON.parse(response.body)
      expect(json_response.length).to eq(1)
      expect(json_response.first['contact_count']).to eq(2)
    end
  end

  describe "POST #create" do
    it "creates a new interaction for a company" do
      expect {
        post :create, params: { company_id: company.id, interaction: { description: "New Interaction" } }
      }.to change(Interaction, :count).by(1)
      expect(response).to have_http_status(:created)
    end

    it "returns validation error for missing description" do
      post :create, params: { company_id: company.id, interaction: { description: "" } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end

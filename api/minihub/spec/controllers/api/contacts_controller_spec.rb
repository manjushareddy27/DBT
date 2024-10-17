require 'rails_helper'

RSpec.describe Api::ContactsController, type: :controller do
  let!(:company) { create(:company) }  # Create a company
  let!(:contacts) { create_list(:contact, 3, company: company) }  # Create 3 contacts for the company

  describe "GET #index" do
    it "returns all contacts for a specific company" do
      get :index, params: { company_id: company.id }
      expect(response).to have_http_status(:success)
      json_response = JSON.parse(response.body)
      expect(json_response.length).to eq(3)  # Ensure 3 contacts are returned
    end
  end

  describe "POST #create" do
    it "creates a new contact for a company" do
      expect {
        post :create, params: { company_id: company.id, contact: { name: "New Contact" } }
      }.to change(Contact, :count).by(1)
      expect(response).to have_http_status(:created)
    end

    it "returns validation error for missing name" do
      post :create, params: { company_id: company.id, contact: { name: "" } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe "PATCH #update" do
    it "updates an existing contact" do
      contact = contacts.first
      patch :update, params: { company_id: company.id, id: contact.id, contact: { name: "Updated Contact" } }
      expect(response).to have_http_status(:ok)
      contact.reload
      expect(contact.name).to eq("Updated Contact")
    end

    it "returns validation error for invalid update" do
      contact = contacts.first
      patch :update, params: { company_id: company.id, id: contact.id, contact: { name: "" } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end

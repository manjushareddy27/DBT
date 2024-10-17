require 'rails_helper'

RSpec.describe Api::CompaniesController, type: :controller do
  let!(:companies) { create_list(:company, 3) }

  describe "GET #index" do
    it "returns a list of companies" do
      get :index
      expect(response).to have_http_status(:success)
      json_response = JSON.parse(response.body)
      expect(json_response.length).to eq(3)
    end
  end

  describe "GET #show" do
    it "returns the details of a specific company" do
      company = companies.first
      get :show, params: { id: company.id }
      expect(response).to have_http_status(:success)
      json_response = JSON.parse(response.body)
      expect(json_response['name']).to eq(company.name)
    end

    it "returns 404 if company not found" do
      get :show, params: { id: 999 }  # Non-existent company ID
      expect(response).to have_http_status(:not_found)
    end
  end

  describe "POST #create" do
    it "creates a new company" do
      expect {
        post :create, params: { company: { name: "New Company", description: "A new company description" } }
      }.to change(Company, :count).by(1)
      expect(response).to have_http_status(:created)
    end

    it "returns validation error for missing name" do
      post :create, params: { company: { name: "", description: "A new company description" } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe "PATCH #update" do
    it "updates an existing company" do
      company = companies.first
      patch :update, params: { id: company.id, company: { name: "Updated Name" } }
      expect(response).to have_http_status(:ok)
      company.reload
      expect(company.name).to eq("Updated Name")
    end

    it "returns validation error for invalid update" do
      company = companies.first
      patch :update, params: { id: company.id, company: { name: "" } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end

module Api
  class InteractionsController < ApplicationController
    before_action :set_company

    # GET /api/companies/:company_id/interactions
    def index
      if @company.present?
        interactions = @company.interactions.includes(:contacts)
      else
        interactions = Interaction.includes(:company, :contacts)
      end

      # Map the interactions to include contact_count
      interactions_with_contact_count = interactions.map do |interaction|
       interaction.as_json(include: { contacts: { only: [:id, :name] } })
                  .merge(contact_count: interaction.contacts.size)
      end
      render json: interactions_with_contact_count, status: :ok
    end

    private

    def set_company
      return if params[:company_id].blank?

      @company = Company.find(params[:company_id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Company not found' }, status: :not_found
    end
  end
end

module Api
  class ContactsController < ApplicationController
    before_action :set_company

    def index
      if @company.present?
        contacts = @company.contacts
      else
        contacts = Contact.all
      end
      contacts_with_company = contacts.map do |contact|
        contact.as_json(include: { company: { only: [:id, :name] } })
      end
      render json: contacts_with_company, status: :ok
    end

    def create
      contact = @company.contacts.new(contact_params)
      if contact.save
        render json: contact, status: :created
      else
        render json: { errors: contact.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def set_company
      return if params[:company_id].blank?

      @company = Company.find(params[:company_id])  # Find the company based on the company_id in the URL
    end

    def contact_params
      params.require(:contact).permit(:name)
    end
  end
end

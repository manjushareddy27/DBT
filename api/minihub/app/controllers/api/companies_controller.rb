class Api::CompaniesController < ApplicationController
  before_action :set_company, only: [:show, :update]

  def index
    companies = Company.all
    render json: companies
  end

  def show
    render json: @company
  end

  def create
    company = Company.new(company_params)
    if company.save
      render json: company, status: :created
    else
      render json: company.errors, status: :unprocessable_entity
    end
  end

  def update
    company = Company.update(company_params)
    if company.save
      render json: company, status: :updated
    else
      render json: company.errors, status: :unprocessable_entity
    end
  end

  private


  def set_company
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:name)
  end
end

require "test_helper"

class Api::InteractionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_interactions_index_url
    assert_response :success
  end

  test "should get create" do
    get api_interactions_create_url
    assert_response :success
  end
end

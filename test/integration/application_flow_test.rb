require "test_helper"

class ApplicationFlowTest < ActionDispatch::IntegrationTest
  test "can see the home page" do
    get "/"
    assert_select "h1", "Boxcar"
  end
end

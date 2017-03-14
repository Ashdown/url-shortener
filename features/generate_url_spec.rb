ENV['RACK_ENV'] = 'test'

require './app'
require 'rspec'
require 'rack/test'

describe 'Generate Url Endpoint' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  it 'returns short url and url' do
    post '/generate', params={'url' => 'http://www.farmdrop.com'}
    expect(last_response).to be_ok

    parsed_response = JSON.parse(last_response.body)

    expect(parsed_response["short_url"]).to be_truthy
    expect(parsed_response["url"]).to eq('http://www.farmdrop.com')
  end

  # it 'creates shortened url' do
  #   post '/generate', params={'url' => 'http://www.farmdrop.com'}
  #
  #   parsed_response = JSON.parse(last_response.body)
  #
  #   # expect(parsed_response["short_url"]).to eq('/abc123')
  #   get parsed_response["short_url"]
  #
  #   assert_redirected_to('http://www.farmdrop.com')
  #
  #
  #
  # end

end
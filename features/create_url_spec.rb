ENV['RACK_ENV'] = 'test'

require './app'
require 'rspec'
require 'rack/test'

describe 'Create Url Endpoint' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  it 'creates url' do
    post '/generate', params={'url' => 'http://www.farmdrop.com'}
    expect(last_response).to be_ok
    expect(last_response.body).to equal({'short_url' => '/abc123', 'url' => 'http://www.farmdrop.com'})
  end

end
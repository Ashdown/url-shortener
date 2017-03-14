ENV['RACK_ENV'] = 'test'

require './app'
require 'capybara'
require 'capybara/rspec'

Capybara.app = Sinatra::Application

feature 'Homepage' do

  scenario "shows app title" do
    visit '/'
    expect(page).to have_text('Url Shortener')
  end

  scenario "allows user to generate a short url" do
    visit '/'

    random_url = 'http://www.' + ('a'..'z').to_a.shuffle[0,6].join + '.com'

    fill_in('url', :with => random_url)
    click('Submit')
    within('.url-list') do
      expect(page).to have_text(random_url)
    end
  end

end
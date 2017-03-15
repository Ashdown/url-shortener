require 'sinatra'
require 'sinatra/activerecord'
require './config/environments'
require 'slim'
Dir[File.join(File.dirname(__FILE__), './lib/clients', '*.rb')].each {|file| require file }
Dir[File.join(File.dirname(__FILE__), './lib/helpers', '*.rb')].each {|file| require file }
Dir[File.join(File.dirname(__FILE__), './lib/models', '*.rb')].each {|file| require file }

set :haml, :format => :html5

helpers UrlHelper

get '/' do
  slim :index
end

get '/redirections' do
  content_type :json
  Redirection.all.to_json
end

post '/generate' do
  content_type :json

  @redirection = Redirection.new({:url => params[:url], :short_url => random_url()})
  if@redirection.save
    @redirection.to_json
  else
    'An error has occured'
  end

end

get '/:short_url' do
  content_type :json

  Redirection.all.each do |key, value|

    if(key.short_url == '/' + params[:short_url])
      redirect key.url
    end

  end

  redirect '/'

end


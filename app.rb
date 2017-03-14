require 'sinatra'
require 'sinatra/activerecord'
require './config/environments'
require 'slim'
Dir[File.join(File.dirname(__FILE__), './lib/clients', '*.rb')].each {|file| require file }
Dir[File.join(File.dirname(__FILE__), './lib/helpers', '*.rb')].each {|file| require file }
Dir[File.join(File.dirname(__FILE__), './lib/models', '*.rb')].each {|file| require file }

set :haml, :format => :html5

helpers SampleHelper, DateHelper, EchoHelper

get '/' do
  slim :index
end

post '/generate' do
  content_type :json

  @redirection = Redirection.new({:url => params[:url], :short_url => '/' + ('a'..'z').to_a.shuffle[0,6].join})
  @redirection.to_json

end

# get '/second' do
#   slim :second
# end
#
# get '/sample' do
#   slim :sample
# end
#
# get '/form' do
#   slim :form
# end
#
# get '/list' do
#   @samples = Sample.all
#   slim :list
# end
#
# post '/submit' do
#   @sample = Sample.new(params[:sample])
#   if @sample.save
#     redirect '/list'
#   else
#     'An error has occured'
#   end
# end



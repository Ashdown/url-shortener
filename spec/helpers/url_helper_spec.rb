require './lib/helpers/url_helper'

describe UrlHelper  do

  before(:each) do
    @dummy_class = Class.new.extend(UrlHelper)
  end

  context '#random_url' do

    it 'starts with a forward slash' do
      expect(@dummy_class.random_url().chars.first).to eq('/')
    end

    it 'has six characters' do
      expect(@dummy_class.random_url().length).to eq(7)
    end

  end

end

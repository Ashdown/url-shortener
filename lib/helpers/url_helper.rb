module UrlHelper
  def random_url
    '/' + ('a'..'z').to_a.shuffle[0,6].join
  end
end
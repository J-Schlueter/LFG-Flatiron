class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  config.middleware.use ActionDispatch::Cookies
  config.middleware.use ActionDispatch::Session::CookieStore

  config.action_dispatch.cookies_same_site_protection = :strict
end

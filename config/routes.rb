Rails.application.routes.draw do
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :event_entries
  resources :events
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

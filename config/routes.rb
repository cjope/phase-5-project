Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/me", to: "users#show"
  get "/test", to: "users#test"
  post "/signup", to: "users#create"
  

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

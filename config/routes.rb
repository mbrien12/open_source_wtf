Rails.application.routes.draw do
  root to: "pages#home"

  get "/why-open-source", to: "pages#why"
  get "/first-pull-request", to: "pages#first"
  get "/resources", to: "pages#resources"

end
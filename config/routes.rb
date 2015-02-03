ZenWebsite::Application.routes.draw do
  root "landing#show"
  resource :clients, only: :create

  devise_for :users
end

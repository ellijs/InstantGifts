Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/signup', to: 'users#create'
  get "/me", to: "users#show"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # increment likes when likebutton clicks
  patch '/gifts/:id/like', to: 'gifts#increment_likes'
  patch '/gifts/:id/dislike', to: 'gifts#decrement_likes'

  resources :friends
  resources :reviews
  resources :gifts
  resources :orders
  resources :users, only: [:create, :update, :show]
end